import styled from "styled-components";

export const StyledBuildingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-gap: 45px;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
    place-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 20px;
  }
`;

export const StyledBuildingsListPlaceholderTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  padding-top: 50px;
  font-size: 18px;
`;