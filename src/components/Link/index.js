import styled, { css } from 'styled-components';
import { COLORS } from 'resources/colors';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  font-family: 'Poppins';
  font-weight: 600;
  ${(props) => props.size && SizeStyles[props.size]};
  margin: ${({ margin }) => margin};
  color: ${COLORS.SkyBlue};
  text-decoration: none;

  :hover {
    color: ${COLORS.PrimaryBlue};
  }
`;

export default StyledLink;
