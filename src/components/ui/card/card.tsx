import React from 'react';
import { StyledCard, StyledCardAvaiable, StyledCardAvaiableContainer, StyledCardButton } from './styled';
import Title, { TitleLevel, TitleColor, TitleType } from '../title/title';
import ReadMoreButton from '../readMoreButton/readMoreButton';

interface CardProps {
  gridArea: string;
}

function Card() {
  return (
    <StyledCard>
      <Title
        level={TitleLevel.H2}
        color={TitleColor.WHITE}
        type={TitleType.CARD}
      >
        Card Name
      </Title>

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
