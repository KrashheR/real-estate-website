import styled from "styled-components";

export const StyledApartmentFeature = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  padding: 20px;
  max-width: 280px;
  height: 100px;
  gap: 20px;
  align-items: center;
  border-radius: 25px;
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

