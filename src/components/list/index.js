import styled from 'styled-components';
import { withColorProps, withSpacingProps } from '../../lib';

export const List = styled.ul`
  list-style-type: none;
  ${withColorProps}
  ${withSpacingProps}
`;

export const ListItem = styled.li`
  ${withColorProps}
  ${withSpacingProps}
  cursor: pointer;
`;
