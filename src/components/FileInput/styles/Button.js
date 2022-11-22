import { COLORS } from 'resources/colors';
import styled from 'styled-components';

const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${COLORS.White};
  background-color: ${COLORS.SkyBlue};
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  transition: background-color 0.4s;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);

  i {
    width: 1.5em;
    height: 1.5em;
    padding: 0.4em;
    background-color: #fff;
    color: #f55e30;
    border-radius: 50%;
    display: flex;
    font-size: 0.8em;
  }

  svg {
    margin-left: 10px;
  }
`;

export default Label;
