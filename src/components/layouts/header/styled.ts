import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  border-bottom: 1px solid ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0 4px 4px rgba(0,0,0,.05);
`;
