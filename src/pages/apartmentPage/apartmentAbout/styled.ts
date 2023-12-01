import styled from "styled-components";

export const StyledApartmentAbout = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledApartmentAboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledApartmentAboutInfo = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 3fr 1fr;
  gap: 80px;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-height: fit-content;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    gap: 40px;
  }
`

export const StyledApartmentAboutPicture = styled.picture`
  align-self: center;
  height: 450px;
  width: 450px;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    height: 350px;
    width: 350px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    height: 80vw;
    width: 80vw;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 90vw;
    width: 90vw;
  }
`;

export const StyledApartmentAboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;