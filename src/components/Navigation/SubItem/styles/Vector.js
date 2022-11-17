import { COLORS } from 'resources/colors';
import styled, { css } from 'styled-components';

const RIGHT_STYLE = css`
  right: 13.5%;
  left: 80.59%;
`;

const LEFT_STYLE = css`
  left: 13.5%;
  right: 80.59%;
`;

const Vector = styled.div`
  position: absolute;
  top: -5px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${COLORS.White};
  ${(isRightSide) => (isRightSide ? RIGHT_STYLE : LEFT_STYLE)}
`;

export default Vector;
