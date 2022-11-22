import styled from 'styled-components';

const ChildrenContainer = styled.div`
  transition: opacity 0.4s ease-in-out;
  ${({ isSmall }) => isSmall && `opacity: 0;`}
`;

export default ChildrenContainer;
