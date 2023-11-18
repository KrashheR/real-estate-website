import styled from "styled-components";

export const StyledNewsList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  place-items: center;
  gap: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(80vw, 1fr));
  }
`;

