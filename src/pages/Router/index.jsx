import React, { useMemo } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from 'components/Navigation/PrivateRoute';
import RestrictedRoute from 'components/Navigation/RestrictedRoute';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAuthData } from 'state/selectors/auth';
import privateRoutes from './privateRoutes';
import getRestrictedRoutes from './getRestrictedRoutes';

const Router = () => {
  const { isLogged } = useSelector(selectAuthData, shallowEqual);

  const restrictedRoutes = useMemo(() => getRestrictedRoutes({ isLogged }), [
    isLogged,
    getRestrictedRoutes,
  ]);

  return (
    <BrowserRouter>
      <Switch>
        {restrictedRoutes.map((values) => (
          <RestrictedRoute exact {...values} key={values.path} />
        ))}
        {privateRoutes.map((values) => (
          <PrivateRoute exact {...values} key={values.path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
