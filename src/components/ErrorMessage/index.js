import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  color: ${COLORS.RedError};
  font-size: 0.88rem;
  line-height: 1.5rem;
  ::before {
    content: '⚠ ';
  }
  margin: 0;
`;

export default ErrorMessage;
