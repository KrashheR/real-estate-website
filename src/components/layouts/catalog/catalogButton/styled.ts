import styled from "styled-components";

export const StyledCatalogButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
  color: ${(props) => props.theme.colors.colorWhite};
  cursor: pointer;
`;