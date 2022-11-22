import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  background: ${COLORS.GreyBackground};

  //TODO: DELETE PADDING TOP AND BOTTOM, ONLY FOR TESTING PURPOSES
  padding: 40px 0px;
`;

export default Container;
