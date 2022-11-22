import { COLORS } from 'resources/colors';
import { MEDIA } from 'resources/layout';
import styled, { css } from 'styled-components';
import { SIZES } from 'utils/constant';

const SizeStyles = {
  [SIZES.MEDIUM]: css`
    width: 240px;
    padding: 12px;
    gap: 10px;

    ${MEDIA.sm`
      width: 280px;
    `}
    ${MEDIA.tb`
      width: 360px;
    `}
  `,
};

const InputIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) => props.size && SizeStyles[props.size]}
  border: 1px solid ${COLORS.GreyBorder};
  border-radius: 8px;

  ${(props) =>
    props.disabled &&
    `cursor: not-allowed; 
     background: ${COLORS.GreyBackground};
    `}

  svg {
    color: ${COLORS.GreyIcon};
    width: 18px;
    height: 18px;
  }

  :focus-within {
    border: 1px solid ${COLORS.SkyBlue};
  }

  :hover {
    border: 1px solid ${COLORS.SkyBlue};
  }
`;

export default InputIcon;
