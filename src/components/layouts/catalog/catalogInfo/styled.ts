import styled from "styled-components";

export const StyledCatalogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 880px;
  height: 600px;
  border-radius: 30px;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.colorWhite};

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: 100%;
  }
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

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: 16px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
    text-align: center;
  }
`;

export const StyledCatalogInfoImg = styled.img`
  width: 520px;
  height: 460px;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 400px;
    height: 400px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 70vw;
    height: 70vw;
  }
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

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 15px;
    width: 75vw;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-items: center;
  }
`;

export const StyledCatalogInfoItem = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledCatalogInfoLabel = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorGray}
`;

export const StyledCatalogInfoData = styled.p`
  color: ${(props) => props.theme.colors.colorBlack};
  font-weight: 500;
`;