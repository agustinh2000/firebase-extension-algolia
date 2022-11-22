import { COLORS } from 'resources/colors';
import styled, { css } from 'styled-components';

export const SizeTitle = Object.freeze({
  Default: 'default',
  L: 'size-large',
  M: 'size-medium',
  S: 'size-small',
});

const SizeStyles = {
  [SizeTitle.Default]: css`
    font-size: 1.2rem;
    line-height: 1.23rem;
  `,
  [SizeTitle.S]: css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  [SizeTitle.M]: css`
    font-size: 2.5rem;
    line-height: 3.2rem;
  `,
  [SizeTitle.L]: css`
    font-size: 3.5rem;
    line-height: 4.5rem;
  `,
};

export const ColorsTitle = Object.freeze({
  Dark: 'dark',
  Grey: 'grey',
});

const ColorStyles = {
  [ColorsTitle.Dark]: css`
    color: ${COLORS.DarkBlue};
  `,
  [ColorsTitle.Grey]: css`
    color: ${COLORS.GreyText};
  `,
};

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  ${(props) => props.size && SizeStyles[props.size]};
  ${(props) => props.color && ColorStyles[props.color]};
  text-align: center;
`;

export default Title;
