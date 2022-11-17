/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  CREATE_POST_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_INIT,
} from 'state/actionCreators/posts';

export const initialState = {
  loadingCreatePost: false,
  errorCreatePost: null,
};

const persistConfig = {
  key: 'posts',
  storage,
  blacklist: ['loadingCreatePost', 'errorCreatePost'],
};

const postsReducer = persistReducer(
  persistConfig,
  createReducer(initialState, {
    [CREATE_POST_INIT]: (state) => {
      state.loadingCreatePost = true;
      state.errorCreatePost = null;
    },
    [CREATE_POST_SUCCESS]: (state) => {
      state.loadingCreatePost = false;
      state.errorCreatePost = null;
    },
    [CREATE_POST_ERROR]: (state, { payload }) => {
      const { error } = payload;
      state.loadingCreatePost = false;
      state.errorCreatePost = error;
    },
  })
);

export default postsReducer;
