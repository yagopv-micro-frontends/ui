import styled from 'styled-components';
import { fontFamily } from '../../lib';
export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  font-family: ${fontFamily('primary')};
  flex: 1;
  font-size: 1rem;
  border solid 2px;
  padding: 10px;
  background: transparent;
  outline: none;
  color: inherit;
  ::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;
