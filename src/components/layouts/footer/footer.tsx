import React from "react";
import { StyledFooter, StyledFooterProjectsList, StyledFooterProject, StyledFooterProjectLink, StyledFooterContainer } from "./styled";
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
          Наши проекты:
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
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;