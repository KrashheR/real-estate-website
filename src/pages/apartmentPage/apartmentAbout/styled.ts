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
  display: flex;
  justify-content: space-between;
  max-height: 450px;
  margin-top: 30px;
  gap: 200px;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-height: fit-content;
    gap: 80px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    max-height: fit-content;
    gap: 40px;
  }
`

export const StyledApartmentAboutImg = styled.img`
align-self: center;
  height: 450px;
  width: 450px;
  border-radius: 30px;

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