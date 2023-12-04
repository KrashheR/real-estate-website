import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";

export const StyledNewsArticle = styled.article`
  margin: 30px 0;
  min-height: calc(100vh - 140px);
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledNewsContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledNewsPicture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const StyledNewsImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
`;

export const StyledNewsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;