import React, { ReactNode } from 'react';
import { StyledPromoCard, StyledPromoImg } from './styled';
import Title, {
  TitleLevel,
  TitleColor,
  TitleType,
} from '../../../ui/title/title';
import Description from '../../../ui/description/description';

interface PromoCardProps {
  title: string;
  description: string;
  img: string;
  href: string;
  area: string;
}

function PromoCard(props: PromoCardProps) {
  return (
    <StyledPromoCard href={props.href} $area={props.area}>
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.PROMO}
      >
        {props.title}
      </Title>
      <Description>{props.description}</Description>
      <StyledPromoImg src={props.img} />
    </StyledPromoCard>
  );
}

export default PromoCard;
