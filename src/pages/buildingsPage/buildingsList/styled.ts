import styled from "styled-components";

export const StyledBuildingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(325px, 1fr));
  grid-gap: 45px;
  margin-bottom: 40px;
  min-height: calc(100vh - 470px);

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(2, minmax(325px, 1fr));
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