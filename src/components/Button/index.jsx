import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Button = styled.button`
  ${(props) => props.fullWidth && `width: 100%;`}

  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;

  background: ${COLORS.SkyBlue};
  color: ${COLORS.White};
  cursor: pointer;

  :hover {
    background: ${COLORS.PrimaryBlue};
  }

  ${(props) =>
    props.disabled &&
    `
    background: ${COLORS.GreyButton};
    color: ${COLORS.GreyText};
    cursor: not-allowed;
  `}
`;

export default Button;
