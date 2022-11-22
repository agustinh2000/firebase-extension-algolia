import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  transition: margin 0.4s ease-in-out;
  ${({ isSmall }) => isSmall && `margin: 0 5px;`}
`;

export default IconContainer;
