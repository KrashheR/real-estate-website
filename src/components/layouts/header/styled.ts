import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
`;
