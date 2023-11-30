import styled from 'styled-components';
import { StyledReadMoreButton } from '../../../components/ui/readMoreButton/styled';
import { Link } from 'react-router-dom';

type StyledBuildingsCardAreaProps = {
  $area: string;
};

type StyledBuildingsCardTypeProps = {
  $type: string;
};

export const StyledBuildingsCard = styled(Link)<StyledBuildingsCardTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 370px;
  height: 410px;
  color: ${(props) =>
    props.$type === 'premium'
      ? props.theme.colors.colorWhite
      : props.theme.colors.colorBlack};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;

  @media (min-width: ${(props) => props.theme.deviceSizes.laptop}) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 80vw;
    height: 500px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 400px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    height: 350px;
  }
`;

export const StyledBuildingsCardPicture = styled.picture`
  display: block;
  height: 263px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    height: 233px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    height: 353px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 253px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    height: 193px;
  }
`;

export const StyledBuildingsCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const StyledBuildingsCardDescription = styled.div<StyledBuildingsCardTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
  height: 147px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${(props) =>
    props.$type === 'premium'
      ? props.theme.colors.colorMainRed
      : props.theme.colors.colorLightRed};
`;

export const StyledBuildingsCardAvaiableContainer = styled.div`
  display: grid;
  grid-template-areas:
    'house housePrice button'
    'parking parkingPrice button';
  align-items: center;
  padding: 0 20px 20px 20px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    padding: 0 10px 20px 10px;
  }
`;

export const StyledBuildingsCardAvaiable = styled.span<StyledBuildingsCardAreaProps>`
  grid-area: ${(props) => props.$area};
  font-size: 12px;
`;

export const StyledBuildingsCardPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledBuildingsCardPlaceIcon = styled.img`
  width: 16px;
`;

export const StyledBuildingsCardPlaceText = styled.span`
  font-size: 14px;
`;

export const StyledBuildingsCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 0 20px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 0 10px;
  }
`;

export const StyledBuildingsCardButton = styled(
  StyledReadMoreButton,
)<StyledBuildingsCardTypeProps>`
  grid-area: button;
  justify-self: end;
  height: 40px;

  background-color: ${(props) => {
    return props.$type === 'premium'
      ? props.theme.colors.colorWhite
      : props.theme.colors.colorMainRed;
  }};
  color: ${(props) => {
    return props.$type === 'premium'
      ? props.theme.colors.colorMainRed
      : props.theme.colors.colorWhite;
  }};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 35px;
    width: 90px;
    font-size: 12px;
  }
`;
