import styled from "styled-components";

export const StyledNewsList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  align-items: top;
  gap: 40px;
  min-height: 680px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(80vw, 1fr));
  }
`;

