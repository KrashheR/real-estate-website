import styled from 'styled-components';
import { StyledReadMoreButton } from '../../../ui/readMoreButton/styled';
import CountdownTimer from '../../../ui/countdownTimer/countdownTimer';

export const StyledCountdownOfferCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 620px;
  height: 240px;
  border-radius: 25px;
  padding: 25px;
  color: ${(props) => props.theme.colors.colorWhite};
  background: ${(props) => props.theme.colors.promoGradient};
  font-weight: 400;
  grid-area: countdown;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.boxShadowMain};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    color 0.1s ease;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.deviceSizes.laptop}) {
    &:hover {
      transform: scale3d(1.01, 1.01, 1) translateY(-2px);
      box-shadow: 0px 3px 8px ${(props) => props.theme.colors.boxShadowHover};
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 45vw;
    padding: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 90vw;
    height: 240px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 190px;
  }
`;

export const StyledCountdownOfferCardText = styled.p`
  color: ${(props) => props.theme.colors.colorLightRed};
  font-size: 18px;
  font-weight: 600;
  grid-area: text;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: 16px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 14px;
  }
`;

export const StyledCountdownOfferCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'text button'
    'timer button';
  align-items: center;
  gap: 5px;
  margin-top: auto;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const StyledCountdownOfferButton = styled(StyledReadMoreButton)`
  display: block;
  grid-area: button;
  justify-self: flex-end;
  height: 100%;
  border-radius: 20px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    align-self: flex-end;
  }
`;

export const StyledCountdownOfferTimer = styled(CountdownTimer)`
  grid-area: timer;
`;

export const StyledCountdownOfferDescriptionContainer = styled.div`
  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: none;
  }
`;
