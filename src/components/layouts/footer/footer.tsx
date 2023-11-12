import { StyledFooter, StyledFooterProjectsList, StyledFooterProject, StyledFooterProjectLink, StyledFooterContainer, StyledFooterTitle, StyledFooterAbout, StyledFooterAdress, StyledFooterPhone, StyledFooterPhoneTime } from "./styled";
import Logo from "../../ui/logo/logo";
import logoImage from '../../../assets/images/logo.svg';
import { useAppSelector } from "../../../hooks/redux";
import { selectCards } from "../../../store/reducers/Selectors";

function Footer() {
  const cards = useAppSelector(selectCards);

  return(
    <StyledFooter>
      <StyledFooterContainer>
        <Logo srcImage={logoImage} />
        <StyledFooterProjectsList>
          <StyledFooterTitle>Наши проекты:</StyledFooterTitle>
          {cards.map((card) => {
            return(
              <StyledFooterProject key={card.id}>
                <StyledFooterProjectLink to={"apartments/" + card.title}>
                  {card.title}
                </StyledFooterProjectLink>
              </StyledFooterProject>
            );
          })}
        </StyledFooterProjectsList>
        <StyledFooterAbout>
          <StyledFooterTitle>О компании</StyledFooterTitle>
          <StyledFooterAdress>127238, г. Москва, Дмитровское шоссе, 73Б</StyledFooterAdress>
          <StyledFooterPhone href={"tel:+7123456789"}>+7123456789</StyledFooterPhone>
          <StyledFooterPhoneTime>Ежедневно с 8:00 до 22:00</StyledFooterPhoneTime>
        </StyledFooterAbout>

      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;