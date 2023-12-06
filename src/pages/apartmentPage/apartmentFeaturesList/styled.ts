import styled from "styled-components";

export const StyledApartmentFeaturesList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  width: 100%;
  padding: 30px 0;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;
    place-items: center;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-gap: 20px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(1, auto);
  }
`