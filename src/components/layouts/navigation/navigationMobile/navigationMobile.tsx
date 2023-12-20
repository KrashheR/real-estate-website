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
import { useEffect, useState } from 'react';

function NavigationMobile() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleScroll = () => {
    const footerHeight = 60;
    const distanceFromTop = window.scrollY;
    const distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

    setIsNavVisible(distanceFromTop > 20 && distanceFromBottom > footerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavigationMobile isVisible={isNavVisible}>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage src={isActive ? homeActive : home} alt='Значок главной'/>
              <StyledNavigationMobileText>Главная</StyledNavigationMobileText>
            </>
          )}
        </StyledNavigationMobileLink>
      </StyledNavigationMobileItem>
      <StyledNavigationMobileItem>
        <StyledNavigationMobileLink to="/buildings">
          {({ isActive }) => (
            <>
              <StyledNavigationMobileImage
                src={isActive ? projectsActive : projects} alt='Значок проектов'
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
                src={isActive ? constructorActive : constructor} alt='Значок конструктора'
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
              <StyledNavigationMobileImage src={isActive ? newsActive : news} alt='Значок новостей'/>
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
                src={isActive ? aboutUsActive : aboutUs} alt='Значок о нас'
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
