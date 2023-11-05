import styled from "styled-components";

interface StyledCatalogCardProps {
  isSelected: boolean;
}

export const StyledCatalogCard = styled.div<StyledCatalogCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 135px;
  gap: 10px;
  border: ${(props) => props.isSelected ? `1px solid ${props.theme.colors.colorMainRed}` : null};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};

  cursor: pointer;
`;

export const StyledCatalogCardImage = styled.img`
  width: 75px;
`;

export const StyledCatalogCardSize = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
`;
