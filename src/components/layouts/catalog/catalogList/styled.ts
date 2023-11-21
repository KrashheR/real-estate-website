import styled from "styled-components";

export const StyledCatalogList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  width: 340px;
  grid-gap: 10px;
  margin-top: 30px;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.colorMainRed} ${(props) => props.theme.colors.colorLightRed};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.colorLightRed};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    margin-top: 0;
    padding-bottom: 20px;
    gap: 25px;
    overflow-y: hidden;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 5px;
      width: auto;
    }
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 15px;
  }
`;

