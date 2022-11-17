import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './styles/ListItem';
import IconContainer from './styles/IconContainer';
import Container from './styles/Container';
import { Color } from './constants';
import ChildrenContainer from './styles/ChildrenContainer';

const NavItem = ({ children, color, icon, isSmall, isActive, onClick }) => (
  <ListItem
    color={color}
    isSmall={isSmall}
    isActive={isActive}
    onClick={onClick}
  >
    <IconContainer isSmall={isSmall}>{icon}</IconContainer>
    <ChildrenContainer isSmall={isSmall}>{children}</ChildrenContainer>
  </ListItem>
);

NavItem.Container = Container;

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(Object.values(Color)),
  isSmall: PropTypes.bool,
  isActive: PropTypes.bool,
  icon: PropTypes.element,
};

NavItem.defaultProps = {
  color: Color.GreyBlue,
  isSmall: false,
  isActive: false,
  icon: null,
};

export default NavItem;
