import styled from 'styled-components';
import { MEDIA } from 'resources/layout';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;
  ${(p) => p.textAlign && `text-align: ${p.textAlign};`}
  ${(p) => p.reverse && `flex-direction: row-reverse;`}
  ${(p) => p.column && `flex-direction: column;`}
  ${(p) => p.columnReverse && `flex-direction: column-reverse;`}
  ${(p) => p.row && MEDIA[p.row]`flex-direction: row;`}
  ${(p) => p.start && MEDIA[p.start]`justify-content: flex-start;`}
  ${(p) => p.center && MEDIA[p.center]`justify-content: center;`}
  ${(p) => p.end && MEDIA[p.end]`justify-content: end;`}
  ${(p) => p.flexEnd && MEDIA[p.flexEnd]`justify-content: flex-end;`}
  ${(p) => p.top && MEDIA[p.top]`align-items: flex-start;`}
  ${(p) => p.middle && MEDIA[p.middle]`align-items: center;`}
  ${(p) => p.bottom && MEDIA[p.bottom]`align-items: flex-end;`}
  ${(p) => p.baseline && MEDIA[p.baseline]`align-items: baseline;`}
  ${(p) => p.around && MEDIA[p.around]`justify-content: space-around;`}
  ${(p) => p.between && MEDIA[p.between]`justify-content: space-between;`}
  ${(p) => p.evenly && MEDIA[p.evenly]`justify-content: space-evenly;`}
  ${(p) => p.first && MEDIA[p.first]`order: -1;`}
  ${(p) => p.last && MEDIA[p.last]`order: 1;`}
  ${(p) => p.grow && MEDIA[p.grow]`flex-grow: 1;`}
  ${(p) => p.noBasis && MEDIA[p.grow]`flex-basis: 0;`}
  ${(p) => p.hidden && MEDIA[p.hidden]`display: none;`}
  ${(p) => p.noWrap && `flex-wrap: nowrap;`}
  ${(p) => p.spread && `width: 100%;`}
  ${(p) => p.vSpread && `height: 100%;`}
  ${(p) => p.noShrink && `flex-shrink: 0;`}
  ${(p) => p.relative && `position: relative;`}
  ${(p) => p.noOverflow && `max-width: 100%;`}
  ${(p) =>
    p.overlay &&
    `overflow: overlay; 
    @-moz-document url-prefix() {
      overflow-y: auto;
    }`}

  @media print {
    display: none;
  }
  ${(p) => p.gap && `gap: ${p.gap}px;`}
  ${(p) => p.fitContent && `max-width: fit-content;`}
`;

// PROPS:
// - reverse (Boolean): Use flex-direction: row-reverse. Default: false
// - start, center, end, top, middle,
//   bottom, around, between, first,
//   last (String(xs|sm|md|lg|xl|xxl): Align elements to the start or end of row
//                              as well as the top, bottom, or center of a column.

export default FlexContainer;
