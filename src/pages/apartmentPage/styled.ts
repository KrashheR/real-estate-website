import styled from 'styled-components';

export const StyledApartment = styled.article`
  min-height: calc(100vh - 200px);
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledApartmentNotFound = styled.h1`
  text-align: center;
`;