import {
  StyledNavigationMobileItem,
  StyledNavigationMobileLink,
  StyledNavigationMobile,
  StyledNavigationMobileImage,
  StyledNavigationMobileText,
} from './styled';
import news from '../../../../assets/images/mobileNavigation/news.svg';
import constructor from '../../../../assets/images/mobileNavigation/constructor.svg';
import aboutUs from '../../../../assets/images/mobileNavigation/aboutUs.svg';
import projects from '../../../../assets/images/mobileNavigation/projects.svg';
import home from '../../../../assets/images/mobileNavigation/home.svg';
import newsActive from '../../../../assets/images/mobileNavigation/newsActive.svg';
import constructorActive from '../../../../assets/images/mobileNavigation/constructorActive.svg';
import aboutUsActive from '../../../../assets/images/mobileNavigation/aboutUsActive.svg';
import projectsActive from '../../../../assets/images/mobileNavigation/projectsActive.svg';
import homeActive from '../../../../assets/images/mobileNavigation/homeActive.svg';

function NavigationMobile() {
  return (
    <StyledNavigationMobile>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage src={isActive ? homeActive : home} />
              <StyledNavigationMobileText>Главная</StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/apartments">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage
                src={isActive ? projectsActive : projects}
              />
              <StyledNavigationMobileText>Проекты</StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/constructor">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage
                src={isActive ? constructorActive : constructor}
              />
              <StyledNavigationMobileText>
                Конструктор
              </StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/news">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage src={isActive ? newsActive : news} />
              <StyledNavigationMobileText>Новости</StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/about">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage
                src={isActive ? aboutUsActive : aboutUs}
              />
              <StyledNavigationMobileText>О нас</StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
    </StyledNavigationMobile>
  );
}

export default NavigationMobile;
