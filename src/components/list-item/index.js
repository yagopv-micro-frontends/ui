import styled from 'styled-components';
import { withColorProps, withSpacingProps } from '../../lib';

export default styled.li`
  ${withColorProps}
  ${withSpacingProps}
  cursor: pointer;
`;
