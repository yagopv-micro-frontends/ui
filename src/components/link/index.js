import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../lib';

export const linkMixin = css`
  font-family: ${fontFamily('secondary')};
  color: ${color('secondary')};
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    opacity: 0.7;
    border-bottom: 2px solid ${color('secondary')};
  }

  :active {
    opacity: 1;
    border-bottom: 2px solid ${color('secondary')};
  }
`;

export default styled.a`
  ${linkMixin}
`;
