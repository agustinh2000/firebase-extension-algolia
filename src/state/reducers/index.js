import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from 'state/reducers/users';
import authReducer from 'state/reducers/auth';
import postsReducer from 'state/reducers/posts';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  post: postsReducer,
});

export default rootReducer;
