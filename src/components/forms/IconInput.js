import styled from 'styled-components';

export const IconInput = styled(Input)`
  background-image: ${(props) => props.image};
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
`;
