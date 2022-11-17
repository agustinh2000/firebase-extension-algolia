import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Background = styled.div`
  z-index: 110;
  background-color: ${COLORS.Black};
  opacity: 0.2;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default Background;
