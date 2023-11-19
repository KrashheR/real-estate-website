import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigationUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin-right: auto;
  font-size: 14px;
  font-variation-settings: 'wght' 600;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: none;
  }
`;

export const StyledNavigationLi = styled.li`
  position: relative;
  padding: 2px 0;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    right: 50%;
    left: 50%;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: ${(props) => props.theme.colors.colorMainRed};
    transition: all 0.4s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};

    &:before {
      width: 100%;
      right: 0%;
      left: 0%;
    }
  }
`;

export const StyledNavigationNavLink = styled(NavLink)`
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.colors.colorBlack};

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};
  }

  &.active {
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;
