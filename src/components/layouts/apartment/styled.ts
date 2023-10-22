import styled from "styled-components";

export const StyledApartment = styled.section`
  color: ${(props) => props.theme.colors.colorBlack};
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

export const StyledApartmentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledApartmentImg = styled.img`
  height: 450px;
  width: 450px;
  border-radius: 30px;
`;