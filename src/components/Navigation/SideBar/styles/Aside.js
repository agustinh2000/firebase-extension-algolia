import styled from 'styled-components';

import { COLORS } from 'resources/colors';
import { SIDEBAR_WIDTH } from '../constants';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 101;
  padding: 28px 25px 78px 25px;
  transition: all 0.5s ease-in-out;
  border-right: 1px solid ${COLORS.GreyBorder};
  width: ${({ open }) => (open ? '256px' : SIDEBAR_WIDTH)};
  background-color: ${COLORS.White};
`;

export default Aside;
