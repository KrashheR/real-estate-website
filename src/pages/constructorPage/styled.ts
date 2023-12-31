import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";

export const StyledConstructorPage = styled.main`
  min-height: calc(100vh - 200px);

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    min-height: calc(100vh - 166px);
  }
`;

export const StyledConstructorContainer = styled(StyledContainer)`
  display:flex;
  flex-direction: column;
`;