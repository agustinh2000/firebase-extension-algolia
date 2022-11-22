import { signOut, getAuth } from 'firebase/auth';

const logout = () => signOut(getAuth());

export default logout;
