import styled from "styled-components";

export const StyledCatalogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 880px;
  height: 600px;
  border-radius: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledCatalogInfoApartment = styled(StyledCatalogInfo)`
  justify-content: space-between;
`;

export const StyledCatalogInfoPlaceholder = styled(StyledCatalogInfo)`
  justify-content: center;
`;

export const StyledCatalogInfoPlaceholderTitle = styled.h3`
  display: block;
  font-weight: 400;
  font-size: 20px;
`;

export const StyledCatalogInfoImg = styled.img`
  width: 520px;
  height: 460px;
`;

export const StyledCatalogInfoContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  padding: 20px 40px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledCatalogInfoItem = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StyledCatalogInfoLabel = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorGray}
`;

export const StyledCatalogInfoData = styled.p`
  color: ${(props) => props.theme.colors.colorBlack};
  font-weight: 500;
`