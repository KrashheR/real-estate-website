import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";

export const StyledMainPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledMainPageBuildings = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;