import styled from 'styled-components';
import { color, fontFamily } from '../../lib';

export default styled.textarea`
  background: transparent;
  border: none;
  color: ${color('primary')};
  font-family: ${fontFamily('secondary')};
  font-size: 3rem;
  height: 70px;
  font-weight: bold;
  outline: none;
  width: 100%;
  resize: none;
  ::placeholder {
    font-family: ${fontFamily('primary')};
    opacity: 0.5;
  }
`;
