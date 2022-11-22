import { createSelector } from '@reduxjs/toolkit';

const selectPostsStates = (state) => state.post;

const selectStatusOfCreatePost = createSelector(
  selectPostsStates,
  ({ loadingCreatePost, errorCreatePost }) => ({
    error: errorCreatePost,
    loading: loadingCreatePost,
  })
);

export default selectStatusOfCreatePost;
