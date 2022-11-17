import { COLORS } from 'resources/colors';
import { MEDIA } from 'resources/layout';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
  background: ${COLORS.White};
  border: 1px solid ${COLORS.GreyBorder};
  border-radius: 16px;

  ${MEDIA.tb`
    padding: 40px;
  `}
`;

export default Form;
