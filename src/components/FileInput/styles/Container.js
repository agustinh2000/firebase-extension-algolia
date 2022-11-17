import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 5px;
  :hover {
    button {
      background: ${COLORS.PrimaryBlue};
    }
  }
`;

export default Container;
