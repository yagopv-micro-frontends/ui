import styled from 'styled-components';
import { color, fontFamily, fontSize } from '../../lib';

export default styled.textarea`
  font-family: ${fontFamily('primary')};
  padding: 1rem;
  border: 2px solid ${color('primary')};
  flex: 1;
  font-size: 1rem;
  border-radius: 5px;
  background: transparent;
  outline: none;
  display: block;
  margin: 2rem 0;
  width: 100%;
  color: ${color('medium')}
  resize: none;
  overflow: hidden;
  min-height: 50px;
  max-height: 100%;
  ::placeholder {
    color: ${(props) => color('medium')};
    opacity: 0.5;
  }
`;
