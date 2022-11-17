import { createSelector } from '@reduxjs/toolkit';

const selectAuthState = (state) => state.auth;

export const selectStatusSignIn = createSelector(
  selectAuthState,
  ({ loadingSignIn, errorSignIn, loadingProviders, errorProviders }) => ({
    loading: loadingSignIn || loadingProviders,
    error: errorSignIn ?? errorProviders,
  })
);

export const selectStatusSignUp = createSelector(
  selectAuthState,
  ({ loadingSignUp, errorSignUp, errorProviders, loadingProviders }) => ({
    loading: loadingSignUp ?? loadingProviders,
    error: errorSignUp ?? errorProviders,
  })
);

export const selectAuthData = createSelector(
  selectAuthState,
  ({ loggedUser }) => ({
    isLogged: !!loggedUser,
  })
);

export const getLoggedUser = createSelector(
  selectAuthState,
  ({ loggedUser }) => ({
    loggedUser,
  })
);
