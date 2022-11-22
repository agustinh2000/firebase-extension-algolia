import {
  getAuth,
  sendEmailVerification as sendEmailVerificationService,
} from 'firebase/auth';

const actionCodeSettings = {
  url: process.env.REACT_APP_PUBLIC_LOGIN_PAGE_URL,
  handleCodeInApp: true,
};

const sendEmailVerification = () =>
  sendEmailVerificationService(getAuth().currentUser, actionCodeSettings);

export default sendEmailVerification;
