import styled from 'styled-components';
import SubItemsContainer from './SubItemsContainer';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
  animation-duration: 0.4s;
  height: 93px;

  &:hover ${SubItemsContainer} {
    opacity: 1;
    visibility: visible;
    animation-name: display-dropdown;
    height: auto;
  }

  @keyframes display-dropdown {
    from {
      transform: scaleY(0);
    }

    to {
      transform: scaleY(1);
    }
  }
`;

export default Container;
