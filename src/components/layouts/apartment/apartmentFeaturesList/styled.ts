import styled from "styled-components";

export const StyledApartmentFeaturesList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  margin-top: 60px;
  width: 100%;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;
    place-items: center;
    padding: 0 50px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    padding: 0;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(1, auto);
    padding: 0;
    grid-gap: 20px;
  }
`