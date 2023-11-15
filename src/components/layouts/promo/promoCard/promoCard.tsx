import { StyledPromoCard, StyledPromoImg } from './styled';
import Title, {
  TitleLevel,
  TitleType,
} from '../../../ui/title/title';
import Description, { DescriptionType } from '../../../ui/description/description';

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
        type={TitleType.PROMOCARD}
      >
        {props.title}
      </Title>
      <Description type={DescriptionType.PROMOCARD}>{props.description}</Description>
      <StyledPromoImg src={props.img} />
    </StyledPromoCard>
  );
}

export default PromoCard;
