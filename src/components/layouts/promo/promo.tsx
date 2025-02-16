import { StyledPromo, StyledPromoContainer } from './styled';
import PromoCard from './promoCard/promoCard';
import carParking from '../../../assets/images/promo/carParking.svg';
import mortgage from '../../../assets/images/promo/mortgage.svg';
import CountdownOfferCard from './countdownOfferCard/countdownOfferCard';
import Slideshow from '../../ui/slideshow/slideshow';
import { useAppSelector } from '../../../hooks/redux';
import { selectPromos } from '../../../store/reducers/promo/PromoSelectors';

function Promo() {
  const slides = useAppSelector(selectPromos);

  console.log(slides);

  return (
    <StyledPromo>
      <StyledPromoContainer>
        <CountdownOfferCard
          toDate={'31 December 2025 23:59:59'}
          link="/buildings"
        />
        <PromoCard
          title="Подбор квартиры"
          description="Подберите жильё, соответствующее вашим требованиям"
          img={mortgage}
          href="/constructor"
          area="cardA"
        />
        <PromoCard
          title="Машиноместа"
          description="Купите квартиру и получите машиноместо в подарок"
          img={carParking}
          href="/buildings?filter-mode=parking-space"
          area="cardB"
        />
        <Slideshow slides={slides} />
      </StyledPromoContainer>
    </StyledPromo>
  );
}

export default Promo;
