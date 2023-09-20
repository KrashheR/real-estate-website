import { StyledA, StyledLi, StyledUl } from './styled';

function NavigationUl() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledA>Новостройки</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Машиноместа</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Ипотека</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Новости</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Клиентам</StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA>Контакты</StyledA>
      </StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;
