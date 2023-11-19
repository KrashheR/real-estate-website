import { StyledNavigationNavLink, StyledNavigationLi, StyledNavigationUl } from './styled';

function NavigationUl() {
  return (
    <StyledNavigationUl>
      <StyledNavigationLi>
        <StyledNavigationNavLink to="/apartments">Новостройки</StyledNavigationNavLink>
      </StyledNavigationLi>
      <StyledNavigationLi>
        <StyledNavigationNavLink to="/constructor/">Конструктор</StyledNavigationNavLink>
      </StyledNavigationLi>
      <StyledNavigationLi>
        <StyledNavigationNavLink  to="/news">Новости</StyledNavigationNavLink>
      </StyledNavigationLi>
      <StyledNavigationLi>
      <StyledNavigationNavLink to="/about">Контакты</StyledNavigationNavLink>
      </StyledNavigationLi>
    </StyledNavigationUl>
  );
}

export default NavigationUl;
