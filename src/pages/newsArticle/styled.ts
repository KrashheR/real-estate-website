import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";

export const StyledNewsArticle = styled.article`
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: calc(100vh - 140px);
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledNewsContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledNewsImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

export const StyledNewsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;