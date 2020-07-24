import styled from 'styled-components';
import Box from '../box';

export default styled(Box)`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.direction};
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
`;
