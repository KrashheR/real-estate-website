import styled from "styled-components";

export const StyledCatalogInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 880px;
  height: 600px;

`;

export const StyledCatalogInfoImg = styled.img`
  width: 480px;
  height: 400px;
`;

export const StyledCatalogInfoContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 70%;
  left:0;
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledCatalogInfoItem = styled.span`
  display: inline-flex;
  flex-direction: column;
`;

export const StyledCatalogInfoLabel = styled.p`

`;

export const StyledCatalogInfoData = styled.p`

`