import { createSelector } from '@reduxjs/toolkit';

const selectUsersState = (state) => state.users;

// eslint-disable-next-line import/prefer-default-export
export const selectLoggedUser = createSelector(
  selectUsersState,
  ({ loadingFetchUser, errorFetchUser, user, loadingUpdate, errorUpdate }) => ({
    loadingUser: loadingFetchUser || loadingUpdate,
    errorUser: errorFetchUser || errorUpdate,
    user: {
      ...user,
      phone: user?.phoneNumber,
    },
  })
);
