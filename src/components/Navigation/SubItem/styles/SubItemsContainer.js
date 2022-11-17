import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const SubItemsContainer = styled.div`
  max-height: fit-content;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  width: max-content;
  background-color: ${COLORS.White};
  top: 98px;
  overflow: visible;
  transform-origin: top center;
  animation-name: hide-dropdown;
  animation-duration: 0.4s;
  transition: opacity 0.3s ease-in-out;
  margin: 0;
  padding: 25px;
  background: ${COLORS.White};
  box-shadow: 0px 40px 120px ${COLORS.SubitemsShadow};
  border-radius: 16px;
  ${(isRightSide) => (isRightSide ? `right: 0;` : `left: 0;`)}

  @keyframes hide-dropdown {
    from {
      transform: scaleY(1);
    }

    to {
      transform: scaleY(0);
    }
  }
`;

export default SubItemsContainer;
