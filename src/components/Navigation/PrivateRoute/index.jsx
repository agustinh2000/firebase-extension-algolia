import React from 'react';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';

import Path from 'enums/path.enum';
import AuthenticatedLayout from 'components/Layouts/Authenticated';
import { selectAuthData } from 'state/selectors/auth';
import RestrictedRoute from '../RestrictedRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector(selectAuthData, shallowEqual);

  return (
    <RestrictedRoute
      component={() => (
        <AuthenticatedLayout>
          <Component {...rest} />
        </AuthenticatedLayout>
      )}
      restrictedCondition={isLogged}
      redirectTo={Path.Login}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
