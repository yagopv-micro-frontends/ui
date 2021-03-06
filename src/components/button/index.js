import styled from 'styled-components';
import { color, fontFamily } from '../../lib';
import { withSpacingProps } from '../../lib';

export default styled.button`
  font-family: ${fontFamily('secondary')};
  transition: all 0.2s;
  min-width: 100px;
  padding: 10px 20px;
  font-size: 1rem;
  background: ${(props) => color(props.background || 'secondary')};
  text-transform: uppercase;
  color: ${(props) => color(props.color || 'bright')};
  outline: none;
  cursor: pointer;
  height: 50px;
  :hover {
    background: ${color('bright')};
    color: ${color('secondary')};
    border: 2px solid ${color('secondary')};
    font-weight: bold;
  }
  :active {
    transform: translateY(2px);
  }
  ${withSpacingProps}
`;
