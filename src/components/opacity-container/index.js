import styled from 'styled-components';

export default styled.div`
  transition: opacity 0.3s ease-in;
  opacity: ${(props) => (props.activated ? props.unit || 0.5 : 1)};
`;
