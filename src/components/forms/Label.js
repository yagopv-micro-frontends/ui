import styled from 'styled-components';
import { fontSize, fontFamily } from '../../lib';

export const Label = styled.label`
  font-family: ${fontFamily('primary')};
  font-size: ${fontSize('sm')};
  color: inherit;
  display: block;
  margin-bottom: 0.5rem;
`;
