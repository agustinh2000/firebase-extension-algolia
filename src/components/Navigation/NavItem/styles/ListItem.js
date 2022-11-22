import { COLORS } from 'resources/colors';
import styled, { css } from 'styled-components';
import { Color } from '../constants';

const ColorStyles = Object.freeze({
  [Color.Grey]: css`
    ${({ isActive }) =>
      isActive
        ? `color: ${COLORS.DarkBlue}; background-color: ${COLORS.LightGrey};`
        : `color: ${COLORS.GreyText};`}
  `,
  [Color.Blue]: css`
    ${({ isActive }) =>
      isActive ? `color: ${COLORS.GreyLetter};` : `color: ${COLORS.White};`}
  `,
  [Color.GreyBlue]: css`
    ${({ isActive }) =>
      isActive
        ? `color: ${COLORS.White}; background-color: ${COLORS.SkyBlue};`
        : `color: ${COLORS.GreyText};`}
  `,
});

const ListItem = styled.li`
  ${({ color }) => color && ColorStyles[color]}
  display: flex;
  list-style: none;
  padding: 17px 21px;
  font-size: 0.875rem;
  line-height: 1rem;
  cursor: pointer;
  border-radius: 8px;
  gap: 15px;
  overflow: hidden;

  :hover {
    opacity: 0.75;
  }
`;

export default ListItem;
