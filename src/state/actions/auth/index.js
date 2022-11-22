import { updateProfile } from 'firebase/auth';

import logout from 'services/auth/logout';
import firebaseError from 'utils/common/firebaseError';
import signUpWithEmail from 'services/auth/signUpWithEmail';
import updateUser from 'services/auth/updateUser';
import signInWithEmail from 'services/auth/signInWithEmail';
import sendEmailVerification from 'services/auth/sendEmailVerification';

import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_INIT,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNOUT_FAIL,
  AUTH_SIGNOUT_INIT,
  AUTH_SIGNOUT_SUCCESS,
  SIGN_UP_INIT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  CLEAN_STATE,
  CLEAN_AUTH_STATE,
} from 'state/actionCreators/auth';
import { cleanUserState } from '../users';

export const cleanAuthState = () => CLEAN_AUTH_STATE();
export const cleanAllState = () => CLEAN_STATE();

export const signIn = (userData) => async (dispatch) => {
  dispatch(AUTH_LOGIN_INIT());
  try {
    const { uid, displayName, photoURL, email } = await signInWithEmail(
      userData
    );
    const user = {
      uid,
      displayName,
      email,
      photoURL,
    };
    return dispatch(AUTH_LOGIN_SUCCESS({ user }));
  } catch (error) {
    const errorMessage = error?.code ? firebaseError(error) : error.message;
    return dispatch(AUTH_LOGIN_FAIL({ error: errorMessage }));
  }
};

export const signOut = () => async (dispatch) => {
  dispatch(AUTH_SIGNOUT_INIT());

  try {
    await logout();

    dispatch(cleanAuthState());
    dispatch(cleanUserState());

    return dispatch(AUTH_SIGNOUT_SUCCESS());
  } catch (error) {
    const errorMessage = firebaseError(error);
    return dispatch(AUTH_SIGNOUT_FAIL({ error: errorMessage }));
  }
};

export const signUp = (registerData, photo) => async (dispatch) => {
  dispatch(SIGN_UP_INIT());
  try {
    const { user } = await signUpWithEmail(registerData);
    const photoUrl = await updateUser(user, registerData.name, photo);

    await updateProfile(user, {
      displayName: registerData.name,
      photoURL: photoUrl,
    });

    await sendEmailVerification();

    dispatch(SIGN_UP_SUCCESS(user.providerData[0]));
  } catch (err) {
    dispatch(SIGN_UP_FAIL({ error: err }));
  }
};
