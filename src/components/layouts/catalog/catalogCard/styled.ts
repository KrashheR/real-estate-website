import styled from "styled-components";

export const StyledCatalogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  gap: 4px;
  border: 1px solid ${(props) => props.theme.colors.colorMainRed};
  border-radius: 25px;
`;

export const StyledCatalogCardImage = styled.img`
  height: 88px;
`;

export const StyledCatalogCardSize = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
`;
