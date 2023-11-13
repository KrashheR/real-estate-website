import styled from "styled-components";
import { StyledContainer } from "../container/styled";

export const StyledApartment = styled.article`
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledApartmentSection = styled.section`
  padding: 30px 0;
  gap: 40px;
  margin-top: 60px;
`;

export const StyledAppartmentMap = styled(StyledApartmentSection)`
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledApartmentMapContainer = styled(StyledContainer)`
  display:flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledApartmentShowroom = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
`;
export const StyledApartmentCatalog = styled(StyledApartmentSection)`
  background-color: ${(props) => props.theme.colors.colorLightRed};
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



