import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: flex;
  gap: 20px;

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`

export const StyledCatalogSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  padding: 32px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.colorWhite};

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: fit-content;
    padding: 20px;
    gap: 20px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 15px;
    align-items: center;
  }

`;

export const StyledCatalogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 70px;
  width: 100%;
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.colorWhite};

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    height: fit-content;
  }
`;