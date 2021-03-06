import styled from 'styled-components';
import { withColorProps, withSpacingProps } from '../../lib';

export default styled.ul`
  list-style-type: none;
  ${withColorProps}
  ${withSpacingProps}
`;
