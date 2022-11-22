import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: #69a3d0;
  cursor: pointer;
  border-radius: 8px;
  width: 100px;
  :hover {
    background-color: ${COLORS.PrimaryBlue};
  }
  ${(props) =>
    props.disabled &&
    `background-color: ${COLORS.GreyButton}; cursor: not-allowed;`}
`;
export default Button;
