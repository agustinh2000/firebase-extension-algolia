import React from 'react';
import NonAuthenticatedLayout from 'components/Layouts/NotAuthenticated';

const withNonAuthenticatedLayout = (Component) => {
  const NonAuthenticateComponent = (props) => (
    <NonAuthenticatedLayout>
      <Component {...props} />
    </NonAuthenticatedLayout>
  );

  if (Component.getInitialProps) {
    NonAuthenticateComponent.getInitialProps = Component.getInitialProps;
  }

  return NonAuthenticateComponent;
};

export default withNonAuthenticatedLayout;
