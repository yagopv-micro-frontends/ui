import styled from 'styled-components';
import { color, fontFamily, fontSize } from '../../lib';

export default styled.p`
  color: ${color('medium')};
  font-family: ${fontFamily('primary')};
  margin: 2rem 0;
  opacity: 0.5;
  font-weight: bold;
  font-size: ${fontSize('lg')};
`;
