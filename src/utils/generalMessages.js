export const scope = 'app.general';

export const generalMessages = {
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
    fieldName: 'email',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Nombre completo',
    fieldName: 'name',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Teléfono (opcional)',
    fieldName: 'phone',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Contraseña',
    fieldName: 'password',
  },
  confirmPassword: {
    id: `${scope}.confirmPassword`,
    defaultMessage: 'Confirmar contraseña',
    fieldName: 'confirmPassword',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Este campo es obligatorio',
  },
  invalidFormat: {
    id: `${scope}.invalidFormat`,
    defaultMessage: 'Este campo tiene un formato invalido',
  },
  passwordMatch: {
    id: `${scope}.passwordMatch`,
    defaultMessage: 'Las contraseñas deben coincidir',
  },
  minLength: {
    id: `${scope}.minLength`,
    defaultMessage: 'La contraseña debe tener al menos 8 caracteres',
  },
  oneLowerCase: {
    id: `${scope}.oneLowerCase`,
    defaultMessage: 'La contraseña debe tener al menos 1 letra minúscula',
  },
  oneUpperCase: {
    id: `${scope}.oneUpperCase`,
    defaultMessage: 'La contraseña debe tener al menos 1 letra mayúscula',
  },
  termsRequired: {
    id: `${scope}.termsRequired`,
    defaultMessage: 'Aceptar los términos y condiciones es obligatorio',
  },
  credentialErrors: {
    id: `${scope}.credentialErrors`,
    defaultMessage: 'Credenciales incorrectas, verifique los datos provistos.',
  },
  share: {
    id: `${scope}.share`,
    defaultMessage: 'Comparte un nuevo post',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Busca un post',
  },
};
