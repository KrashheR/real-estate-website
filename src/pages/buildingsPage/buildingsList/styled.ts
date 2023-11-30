import styled from "styled-components";

export const StyledBuildingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-gap: 45px;
  min-height: 200px;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
    place-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const StyledBuildingsListPlaceholderTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  padding-top: 50px;
  font-size: 18px;
`;