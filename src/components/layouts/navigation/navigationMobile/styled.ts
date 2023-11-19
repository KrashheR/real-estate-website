import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigationMobile = styled.ul`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 10px 40px;
  list-style: none;
  background-color: ${(props) => props.theme.colors.colorWhite};
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); // Добавление тени
  transition: bottom 0.3s;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 10px;
  }
`;

export const StyledNavigationMobileItem = styled.li`
width: 20%;`;

export const StyledNavigationMobileLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: ${(props) => props.theme.colors.colorGray};
  gap: 5px;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;

export const StyledNavigationMobileImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledNavigationMobileText = styled.p`
  font-size: 12px;

  font-weight: 400;


  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 10px;
  }
`;
