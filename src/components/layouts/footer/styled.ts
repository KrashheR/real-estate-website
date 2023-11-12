import styled from 'styled-components';
import { StyledContainer } from '../container/styled';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  margin-top: 40px;
  padding: 20px 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 10px 0;
`;

export const StyledFooterProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  gap: 10px;
`;

export const StyledFooterTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledFooterProject = styled.li`
  list-style: none;
  font-weight: 400;
`;

export const StyledFooterAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-self: flex-start;
  align-items: flex-end;
  gap: 6px;
`;

export const StyledFooterAdress = styled.p`
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledFooterPhone = styled.a`
  color: ${(props) => props.theme.colors.colorBlack};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;

export const StyledFooterPhoneTime = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledFooterProjectLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;
