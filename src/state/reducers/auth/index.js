/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_INIT,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNOUT_FAIL,
  AUTH_SIGNOUT_INIT,
  AUTH_SIGNOUT_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_INIT,
  SIGN_UP_SUCCESS,
  CLEAN_STATE,
  CLEAN_AUTH_STATE,
} from 'state/actionCreators/auth';

export const initialState = {
  loadingSignIn: false,
  errorSignIn: null,
  loggedUser: null,

  loadingSignUp: false,
  errorSignUp: null,
  user: null,

  loadingSignOut: false,
  errorSignOut: null,

  token: null,
};

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: [
    'loadingSignIn',
    'errorSignIn',
    'loadingSignUp',
    'errorSignUp',
    'loadingSignOut',
    'errorSignOut',
  ],
};

const authReducer = persistReducer(
  persistConfig,
  createReducer(initialState, {
    [AUTH_LOGIN_INIT]: (state) => {
      state.loadingSignIn = true;
      state.errorSignIn = null;
    },
    [AUTH_LOGIN_SUCCESS]: (state, { payload }) => {
      state.loadingSignIn = false;
      const { user } = payload;
      state.loggedUser = user;
      state.errorSignIn = null;
    },
    [AUTH_LOGIN_FAIL]: (state, { payload }) => {
      const { error } = payload;
      state.loadingSignIn = false;
      state.errorSignIn = error;
    },
    [AUTH_SIGNOUT_INIT]: (state) => {
      state.loadingSignOut = true;
    },
    [AUTH_SIGNOUT_SUCCESS]: (state) => {
      state.loadingSignOut = false;
      state.errorSignOut = null;
      state.loggedUser = null;
      state.token = null;
    },
    [AUTH_SIGNOUT_FAIL]: (state, { payload }) => {
      const { error } = payload;
      state.errorSignOut = error;
      state.loadingSignOut = false;
    },
    [SIGN_UP_INIT]: (state) => {
      state.loadingSignUp = true;
      state.errorSignUp = null;
    },
    [SIGN_UP_SUCCESS]: (state, { payload }) => {
      state.loadingSignUp = false;
      state.user = payload;
      state.errorSignUp = null;
    },
    [SIGN_UP_FAIL]: (state, { payload }) => {
      const { error } = payload;
      state.loadingSignUp = false;
      state.errorSignUp = error;
    },
    [CLEAN_STATE]: (state) => {
      state.loadingSignIn = false;
      state.errorSignIn = null;
      state.loadingSignOut = false;
      state.errorSignOut = null;
      state.loadingSignUp = false;
      state.errorSignUp = null;
    },
    [CLEAN_AUTH_STATE]: (state) => {
      state.loadingSignIn = false;
      state.errorSignIn = null;
      state.loadingSignOut = false;
      state.errorSignOut = null;
      state.loadingSignUp = false;
      state.errorSignUp = null;
      state.loggedUser = null;
      state.user = null;
      state.loadingSignOut = false;
      state.errorSignOut = null;
      state.token = null;
    },
  })
);

export default authReducer;
