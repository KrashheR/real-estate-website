import styled from "styled-components";

export const StyledApartmentFeature = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledApartmentFeatureContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const StyledApartmentFeatureImage = styled.img`
  width: 40px;
  height: 40px;
`;

