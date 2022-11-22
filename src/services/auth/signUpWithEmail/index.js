import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase';

const signUpWithEmail = async ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export default signUpWithEmail;
