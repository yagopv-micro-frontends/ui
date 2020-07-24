import styled from 'styled-components';
import { color, fontFamily, fontSize } from '../../lib';

export default styled.span`
  font-family: ${fontFamily('secondary')};
  position: relative;
  top: 5px;
  color: ${(props) => color(props.color)};
`;
