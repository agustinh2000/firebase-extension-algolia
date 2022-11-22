import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  restrictedCondition,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      restrictedCondition ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  restrictedCondition: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
