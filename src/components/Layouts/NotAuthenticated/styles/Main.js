import styled from 'styled-components';

import { HEADER_HEIGHT } from 'components/Navigation/NavBar/constants';
import { COLORS } from 'resources/colors';

const Main = styled.main`
  height: 100%;
  margin-top: ${HEADER_HEIGHT};
  background: ${COLORS.GreyBackground};
`;

export default Main;
