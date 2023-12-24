import styled from 'styled-components';
import { StyledContainer } from '../container/styled';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  padding: 20px 0;
  height: 140px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.colorLightRed};

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    padding: 15px 0;
    height: fit-content;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {

  }
`;

export const StyledFooterContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 20px;
  }
`;

export const StyledFooterProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  gap: 10px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-template-columns: repeat(2, 150px);
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: none;
  }
`;

export const StyledFooterTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.colors.colorBlack};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
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

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const StyledFooterAdress = styled.p`
  text-align: right;
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
  text-align: right;
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

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;
