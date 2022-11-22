import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import SubItemsContainer from './styles/SubItemsContainer';
import NavItem from '../NavItem';
import { Color } from '../NavItem/constants';
import Vector from './styles/Vector';

const SubItem = ({ items, children, isRightSide }) => (
  <Container>
    {children}
    <SubItemsContainer isRightSide={isRightSide}>
      <Vector isRightSide={isRightSide} />
      <NavItem.Container>
        {items.map(({ text, path, ...otherProps }) => (
          <NavItem
            key={text}
            {...otherProps}
            isActive={path === window.location.pathname}
            color={Color.Grey}
          >
            {text}
          </NavItem>
        ))}
      </NavItem.Container>
    </SubItemsContainer>
  </Container>
);

SubItem.propTypes = {
  children: PropTypes.node.isRequired,
  isRightSide: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.element,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

SubItem.defaultProps = {
  isRightSide: false,
};

export default SubItem;
