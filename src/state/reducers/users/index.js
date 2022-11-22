/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  USERS_CLEAN_SIGNOUT,
  FETCH_USER_LOGGED_INIT,
  FETCH_USER_LOGGED_SUCCESS,
  FETCH_USER_LOGGED_FAIL,
  CLEAN_USER_STATE,
} from 'state/actionCreators/users';

export const initialState = {
  loading: false,
  data: [],
  error: null,
};

const persistConfig = {
  key: 'users',
  storage,
  blacklist: ['loading', 'data', 'error'],
};

const usersReducer = persistReducer(
  persistConfig,
  createReducer(initialState, {
    [USERS_CLEAN_SIGNOUT]: (state) => {
      state.loading = false;
      state.error = null;
      state.data = [];
    },
    [FETCH_USER_LOGGED_INIT]: (state) => {
      state.loadingFetchUser = true;
      state.errorFetchUser = null;
    },
    [FETCH_USER_LOGGED_SUCCESS]: (state, { payload }) => {
      const { data } = payload;
      state.loadingFetchUser = false;
      state.errorFetchUser = null;
      state.user = data;
    },
    [FETCH_USER_LOGGED_FAIL]: (state, { payload }) => {
      const { error } = payload;
      state.loadingFetchUser = false;
      state.errorFetchUser = error;
    },
    [CLEAN_USER_STATE]: (state) => {
      state.loading = false;
      state.data = [];
      state.error = null;
    },
  })
);

export default usersReducer;
