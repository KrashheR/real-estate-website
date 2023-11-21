import styled from "styled-components";

interface StyledCatalogButtonProps {
  isActive : boolean;
}

export const StyledCatalogButton = styled.button<StyledCatalogButtonProps>`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.colorMainRed : props.theme.colors.colorLightRed};
  color: ${(props) =>
    props.isActive ? props.theme.colors.colorWhite : props.theme.colors.colorBlack};
  cursor: pointer;
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }
`;