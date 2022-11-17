import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import logout from '../logout';

const signInWithEmail = async ({ email, password }) => {
  const auth = getAuth();

  const { user } = await signInWithEmailAndPassword(auth, email, password);

  if (!user.emailVerified) {
    await logout();

    throw new Error('Email no verificado');
  }

  return user;
};

export default signInWithEmail;
