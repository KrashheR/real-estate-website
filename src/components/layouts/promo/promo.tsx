import React from 'react';
import { StyledPromo, StyledPromoContainer } from './styled';
import PromoCard from './promoCard/promoCard';
import carParking from '../../../assets/images/promo/carParking.svg';
import mortgage from '../../../assets/images/promo/mortgage.svg';
import CountdownOfferCard from './countdownOfferCard/countdownOfferCard';
import Slideshow from '../../ui/slideshow/slideshow';

function Promo() {
  return (
    <StyledPromo>
      <StyledPromoContainer>
        <CountdownOfferCard />
        <PromoCard
          title="Выгодная ипотека"
          description="Начните копить на первоначальный взнос с Целепортом под 9% годовых"
          img={mortgage}
          href="#"
          area="cardA"
        />
        <PromoCard
          title="Машиноместа"
          description="Начните копить на первоначальный взнос с Целепортом под 9% годовых"
          img={carParking}
          href="#"
          area="cardB"
        />
        <Slideshow />
      </StyledPromoContainer>
    </StyledPromo>
  );
}

export default Promo;
