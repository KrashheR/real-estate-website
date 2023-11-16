import styled from "styled-components";

export const StyledAboutContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 40vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
    align-self: center;
    gap: 20px;
  }
`;