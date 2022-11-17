import { COLORS } from 'resources/colors';
import { MEDIA } from 'resources/layout';
import styled, { css } from 'styled-components';
import { SIZES } from 'utils/constant';

const SizeStyles = {
  [SIZES.MEDIUM]: css`
    width: 220px;
    ${MEDIA.tb`
      width: 320px;
    `}
  `,
};

const Input = styled.input`
  ${(props) => props.size && SizeStyles[props.size]}

  box-sizing: border-box;
  border: ${(props) =>
    props.noBorder ? 'none' : `1px solid ${COLORS.GreyBorder}`};
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 400;
  font-size: 0.88rem;
  line-height: 1.37rem;

  background: ${COLORS.White};
  color: ${COLORS.Black};

  ${(props) =>
    props.disabled &&
    `cursor: not-allowed; 
     background: ${COLORS.GreyBackground};
     color: ${COLORS.GreyText};
    `}

  :focus {
    outline: none;
  }
`;

export default Input;
