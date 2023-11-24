import styled from "styled-components";

export const StyledApartmentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap: 45px;
  min-height: 200px;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    place-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const StyledApartmentsListPlaceholderTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  padding-top: 50px;
  font-size: 18px;
`;