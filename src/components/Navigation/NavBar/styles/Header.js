import { COLORS } from 'resources/colors';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../constants';

const Header = styled.header`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${HEADER_HEIGHT};
  background: ${COLORS.White};
  padding: 28px 25px;
  border-bottom: 1px solid ${COLORS.GreyBorder};
`;

export default Header;
