import React from 'react';
import PropTypes from 'prop-types';

import SideBar from 'components/Navigation/SideBar';
import NavBar from 'components/Navigation/NavBar';

import Main from './styles/Main';

const AuthenticatedLayout = ({ children }) => (
  <>
    <NavBar />
    <SideBar />
    <Main>{children}</Main>
  </>
);

AuthenticatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedLayout;
