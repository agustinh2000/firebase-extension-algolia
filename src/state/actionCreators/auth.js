import { createAction } from '@reduxjs/toolkit';

export const AUTH_LOGIN_INIT = createAction('AUTH_LOGIN_INIT');
export const AUTH_LOGIN_SUCCESS = createAction('AUTH_LOGIN_SUCCESS');
export const AUTH_LOGIN_FAIL = createAction('AUTH_LOGIN_FAIL');

export const AUTH_SIGNOUT_INIT = createAction('AUTH_SIGNOUT_INIT');
export const AUTH_SIGNOUT_SUCCESS = createAction('AUTH_SIGNOUT_SUCCESS');
export const AUTH_SIGNOUT_FAIL = createAction('AUTH_SIGNOUT_FAIL');

export const SIGN_UP_INIT = createAction('SIGN_UP_INIT');
export const SIGN_UP_SUCCESS = createAction('SIGN_UP_SUCCESS');
export const SIGN_UP_FAIL = createAction('SIGN_UP_FAIL');

export const CLEAN_STATE = createAction('CLEAN_STATE');

export const CLEAN_AUTH_STATE = createAction('CLEAN_AUTH_STATE');
