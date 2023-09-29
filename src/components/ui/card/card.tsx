import React from 'react';
import { StyledCard, StyledCardAvaiable, StyledCardAvaiableContainer, StyledCardButton, StyledCardPlaceContainer, StyledCardPlaceText, StyledCardPlaceIcon, StyledCardTitleContainer } from './styled';
import Title, { TitleLevel, TitleColor, TitleType } from '../title/title';
import metro from "../../../assets/images/card/metro.svg"
import human from "../../../assets/images/card/human.svg"

function Card() {
  return (
    <StyledCard>
      <StyledCardTitleContainer>
        <Title
          level={TitleLevel.H2}
          color={TitleColor.WHITE}
          type={TitleType.CARD}
        >
          CARD NAME
        </Title>
        <StyledCardPlaceContainer>
          <StyledCardPlaceIcon src={metro}/>
          <StyledCardPlaceText>Щелковская</StyledCardPlaceText>
          <StyledCardPlaceIcon src={human}/>
          <StyledCardPlaceText>от 10 мин.</StyledCardPlaceText>
        </StyledCardPlaceContainer>
      </StyledCardTitleContainer>
      <StyledCardAvaiableContainer>
        <StyledCardAvaiable $area={"house"}>20 квартир</StyledCardAvaiable>
        <StyledCardAvaiable $area={"housePrice"}>от 10 млн.</StyledCardAvaiable>
        <StyledCardAvaiable $area={"parking"}>10 машиномест</StyledCardAvaiable>
        <StyledCardAvaiable $area={"parkingPrice"}>от 1 млн.</StyledCardAvaiable>
        <StyledCardButton>ПОДРОБНЕЕ</StyledCardButton>
      </StyledCardAvaiableContainer>
    </StyledCard>
  );
}

export default Card;
