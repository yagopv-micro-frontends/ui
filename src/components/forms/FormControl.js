import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
  position: relative;
  color: ${({ color }) => color || themeColor('primary')};
`;
