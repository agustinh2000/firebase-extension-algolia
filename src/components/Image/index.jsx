import styled, { css } from 'styled-components';

export const SizeImage = Object.freeze({
  Default: 'default',
  L: 'size-large',
  M: 'size-medium',
  S: 'size-small',
});

const SizeStyles = {
  [SizeImage.Default]: css`
    width: 32px;
    height: 32px;
  `,
  [SizeImage.S]: css`
    width: 16px;
    height: 16px;
  `,
  [SizeImage.M]: css`
    width: 64px;
    height: 64px;
  `,
  [SizeImage.L]: css`
    width: 128px;
    height: 128px;
  `,
};

const Image = styled.img`
  ${(props) => props.size && SizeStyles[props.size]}
`;

export default Image;
