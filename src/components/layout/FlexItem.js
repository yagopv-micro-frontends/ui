import styled from 'styled-components';
import { Box } from './Box';

export const FlexItem = styled(Box)`
  flex: ${(props) => props.grow};
`;
