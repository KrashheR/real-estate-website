import styled from "styled-components";

interface StyledCatalogCardProps {
  isSelected: boolean;
}

export const StyledCatalogCard = styled.div<StyledCatalogCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 130px;
  gap: 10px;
  border: ${(props) => props.isSelected ? `1px solid ${props.theme.colors.colorMainRed}` : null};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  cursor: pointer;
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    gap: 5px;
    padding: 10px;
    height: 120px;
  }
`;

export const StyledCatalogCardImage = styled.img`
  width: 75px;
`;

export const StyledCatalogCardSize = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
`;
