import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';

import { COLORS } from 'resources/colors';
import { MEDIA } from 'resources/layout';

const Container = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 33px;
  width: 33px;
  border-radius: 50%;
  border: 1px solid ${COLORS.GreyBorder};
  box-shadow: 0px 4px 8px ${COLORS.LightShadow};
  position: absolute;
  background: ${COLORS.White};
  top: 32px;
  right: -16px;
  cursor: pointer;

  ${MEDIA.tb`
  display: flex;
  `}
`;

const Arrow = ({ active, onClick }) => (
  <Container onClick={onClick} active={active}>
    <BiChevronRight
      color={COLORS.GreyText}
      style={{
        ...(active && { transform: 'rotate(180deg)' }),
      }}
    />
  </Container>
);

Arrow.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Arrow;
