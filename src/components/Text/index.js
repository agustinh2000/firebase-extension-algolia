import styled, { css } from 'styled-components';
import { COLORS } from 'resources/colors';

const selectColor = (dark) => (dark ? COLORS.DarkBlue : COLORS.GreyText);

export const Size = Object.freeze({
  Default: 'default',
  L: 'size-large',
  M: 'size-medium',
  S: 'size-small',
});

const SizeStyles = {
  [Size.Default]: css`
    font-size: 1.2rem;
    line-height: 1.23rem;
  `,
  [Size.S]: css`
    font-size: 0.5rem;
    line-height: 1rem;
  `,
  [Size.M]: css`
    font-size: 1rem;
    line-height: 2rem;
  `,
  [Size.L]: css`
    font-size: 2rem;
    line-height: 3rem;
  `,
};

const Text = styled.span`
  font-family: 'Poppins';
  font-weight: 400;
  ${(props) => props.size && SizeStyles[props.size]};
  color: ${(props) => selectColor(props.dark)};
`;

export default Text;
