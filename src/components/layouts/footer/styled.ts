import styled from "styled-components";
import { StyledContainer } from "../container/styled";

export const StyledFooter = styled.footer`
  margin-top: 40px;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const StyledFooterProjectsList = styled.ul`
  display: flex;
  gap: 20px;
  font-weight: 600;
`;

export const StyledFooterProject = styled.li`
  list-style: none;
  font-weight: 400;
`;

export const StyledFooterProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease;

  &:hover{
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;