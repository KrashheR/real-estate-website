import styled from "styled-components";
import { StyledContainer } from "../container/styled";

export const StyledApartment = styled.section`
  color: ${(props) => props.theme.colors.colorBlack};
`;

const StyledApartmentFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledApartmentText = styled(StyledApartmentFlexColumn)`
`;

export const StyledAppartmentMap = styled(StyledApartmentFlexColumn)`
  margin-top: 60px;
`;
export const StyledApartmentShowroom = styled(StyledApartmentFlexColumn)`
  margin-top: 60px;
`;
export const StyledApartmentCatalog = styled(StyledApartmentFlexColumn)`
  background-color: ${(props) => props.theme.colors.colorLightRed};
  padding: 40px 0;
  gap: 40px;
  margin: 60px 0;
`;

export const StyledCatalogContainer = styled(StyledContainer)`
  display:flex;
  flex-direction: column;
  gap: 20px;
`;


export const StyledApartmentTitleContainer = styled.div`
  position: relative;
`;

export const StyledApartmentTitle = styled.span`
  position: absolute;
  bottom: 1%;
  color:white;
`;

export const StyledApartmentAbout = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 450px;
  margin-top: 30px;
  gap: 200px;
`;

export const StyledApartmentFeatures = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const StyledApartmentImg = styled.img`
  height: 450px;
  width: 450px;
  border-radius: 30px;
`;

