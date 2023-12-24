import styled from "styled-components";

export const StyledApartmentFeature = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  padding: 20px;
  width: 270px;
  height: 110px;
  gap: 20px;
  align-items: top;
  border-radius: 25px;
  overflow: hidden;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 35vw;
    align-items: center;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    gap: 10px;
    width: 40vw;
    height: 130px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 70vw;
    height: 120px;
  }
`;

export const StyledApartmentFeatureContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledApartmentFeatureImage = styled.img`
  width: 40px;
  height: 40px;
`;

