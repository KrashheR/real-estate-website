import styled from 'styled-components';

type StyledPromoCardProps = {
  $area: string;
};

export const StyledPromoCard = styled.a<StyledPromoCardProps>`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => props.$area};
  width: 280px;
  height: 240px;
  border-radius: 25px;
  gap: 10px;
  padding: 25px;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorWhite};
  text-decoration: none;
  box-shadow: 0px 0px 2px ${(props) => props.theme.colors.boxShadowMain};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    color 0.1s ease;

  @media (min-width: ${(props) => props.theme.deviceSizes.laptop}) {
    &:hover {
      color: ${(props) => props.theme.colors.colorMainRed};
      transform: translateY(-2px);
      box-shadow: 0px 3px 8px ${(props) => props.theme.colors.boxShadowHover};
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    padding: 20px;
    width: 20vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 42vw;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    text-align: center;
    width: 40vw;
    height: 200px;
    padding: 15px;
    gap: 5px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    height: 120px;
  }
`;

export const StyledPromoImg = styled.img`
  width: 200px;
  height: 80px;
  margin-top: auto;
  align-self: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 10vw;
    height: 70px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 10vw;
    height: 10vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 12vw;
    height: 12vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    width: 12vw;
    height: 12vw;
  }
`;
