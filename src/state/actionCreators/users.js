import { createAction } from '@reduxjs/toolkit';

export const USERS_CLEAN_SIGNOUT = createAction('USERS_CLEAN_SIGNOUT');

export const FETCH_USER_LOGGED_INIT = createAction('FETCH_USER_LOGGED_INIT');
export const FETCH_USER_LOGGED_SUCCESS = createAction(
  'FETCH_USER_LOGGED_SUCCESS'
);
export const FETCH_USER_LOGGED_FAIL = createAction('FETCH_USER_LOGGED_FAIL');

export const CLEAN_USER_STATE = createAction('CLEAN_USER_STATE');
