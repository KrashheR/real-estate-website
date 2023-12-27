import {
  StyledPromoCard,
  StyledPromoCardDescriptionContainer,
  StyledPromoCardImg,
} from './styled';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../ui/title/title';
import Description, {
  DescriptionSize,
} from '../../../ui/description/description';
import { Link } from 'react-router-dom';

interface PromoCardProps {
  title: string;
  description: string;
  img: string;
  href: string;
  area: string;
}

function PromoCard(props: PromoCardProps) {
  return (
    <StyledPromoCard as={Link} to={props.href} $area={props.area}>
      <Title
        level={TitleLevel.H2}
        size={TitleSize.M}
        weight={TitleWeight.SEMIBOLD}
      >
        {props.title}
      </Title>
      <StyledPromoCardDescriptionContainer>
        <Description size={DescriptionSize.XS}>{props.description}</Description>
      </StyledPromoCardDescriptionContainer>
      <StyledPromoCardImg src={props.img} alt={props.title} />
    </StyledPromoCard>
  );
}

export default PromoCard;
