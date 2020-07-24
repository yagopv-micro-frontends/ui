import styled from 'styled-components';
import {
  withSpacingProps,
  withAlignmentProps,
  withOverflowProps,
} from '../../lib';

export const Box = styled.div`
  ${withSpacingProps}
  ${withAlignmentProps}
  ${withOverflowProps}
`;
