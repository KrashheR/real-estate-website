import styled from "styled-components";
import { StyledContainer } from "../../components/layouts/container/styled";
import { Link } from "react-router-dom";

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

export const StyledNewsBackToList = styled(Link)`
  margin-top: 10px;
  width: 200px;
  padding: 10px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.colors.colorMainRed};
  border-radius: 25px;
  color: ${(props) => props.theme.colors.colorWhite};
  background-color: ${(props) => props.theme.colors.colorMainRed};
  transition: all 0.3s ease;

  &:hover{
    color: ${(props) => props.theme.colors.colorMainRed};
    background-color: ${(props) => props.theme.colors.colorWhite};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    align-self: center;
    width: 180px;
    padding: 8px;
  }
`;