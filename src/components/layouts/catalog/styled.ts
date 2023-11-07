import styled from "styled-components";
import { StyledContainer } from "../container/styled";

export const StyledCatalogContent = styled(StyledContainer)`
  display: flex;
  gap: 20px;
`

export const StyledCatalogSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  padding: 32px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.colorWhite};
`;