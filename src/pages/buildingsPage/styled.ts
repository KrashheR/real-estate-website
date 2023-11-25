import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";

export const StyledBuildingsContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledBuildings = styled.section`

`;