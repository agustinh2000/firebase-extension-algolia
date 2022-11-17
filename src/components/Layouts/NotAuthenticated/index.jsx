import React from 'react';
import PropTypes from 'prop-types';

import NavBar from 'components/Navigation/NavBar';

import Main from './styles/Main';

const NotAuthenticated = ({ children }) => (
  <>
    <NavBar />
    <Main>{children}</Main>
  </>
);

NotAuthenticated.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotAuthenticated;
