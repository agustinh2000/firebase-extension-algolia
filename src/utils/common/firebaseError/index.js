export const authErrors = {
  'auth/email-already-in-use': 'Credenciales existentes. Intente nuevamente.',
  'auth/email-already-exists': 'Credenciales existentes. Intente nuevamente.',
  'auth/invalid-email': 'Email inválido. Intente nuevamente.',
  'auth/wrong-password': 'Credenciales inválidas. Intente nuevamente.',
  'auth/too-many-requests':
    'Ha realizado demasiadas solicitudes. Intente más tarde.',
  'auth/invalid-password':
    'Contraseña inválida. Debe tener al menos 6 caracteres.',
  'auth/invalid-credential': 'Credenciales inválidas. Intente nuevamente',
  'auth/user-not-found': 'Credenciales inválidas. Intente nuevamente',
  'auth/requires-recent-login':
    'Tu ultima sesión ha expirado. Por favor, inicia sesión nuevamente.',
};

export const storageError = {
  'storage/object-not-found': 'Could not find the desired file',
  'storage/canceled': 'You canceled the file upload operation',
  'storage/retry-limit-exceeded':
    'The maximum time limit for the operation with your file has been exceeded',
  'storage/server-file-wrong-size': 'Try uploading your file again',
  'storage/unauthenticated':
    'User is unauthenticated, please authenticate and try again',
};

const globalError = {
  'captcha/expired-captcha': 'The received captcha has expired',
  'captcha/invalid-captcha': 'The received captcha is not valid',
};

const firebaseError = (error) =>
  authErrors[error.code] ??
  authErrors[error.message] ??
  storageError[error.code] ??
  storageError[error.message] ??
  globalError[error.code] ??
  globalError[error.message] ??
  'Unknown error. Please, contact your administrator.';

export default firebaseError;
