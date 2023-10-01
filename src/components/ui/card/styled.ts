import styled, { withTheme } from "styled-components";
import { StyledReadMoreButton } from "../readMoreButton/styled";

type StyledCardAreaProps = {
  $area: string;
};

type StyledCardTypeProps = {
  $type: string;
};

export const StyledCard = styled.a<StyledCardTypeProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
  width: 370px;
  height: 410px;
  border-radius: 20px;
  background-color: ${(props) => {
    return props.$type === "premium" ? props.theme.colors.colorMainRed : props.theme.colors.colorLightRed;
  }};
  color: ${(props) => {
    return props.$type === "premium" ? props.theme.colors.colorWhite : props.theme.colors.colorBlack;
  }};
  padding: 20px;
  cursor: pointer;
`;

export const StyledCardAvaiableContainer = styled.div`
  display: grid;
  grid-template-areas: 'house housePrice button'
                        'parking parkingPrice button';
  align-items: center;

`;

export const StyledCardPlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledCardPlaceIcon = styled.img`
  width: 16px;
`;

export const StyledCardPlaceText = styled.span`
  font-size: 14px;

`;

export const StyledCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledCardButton = styled(StyledReadMoreButton)<StyledCardTypeProps>`
  grid-area: button;
  justify-self: end;
  height: 40px;

  background-color: ${(props) => {
    return props.$type === "premium" ? props.theme.colors.colorWhite : props.theme.colors.colorMainRed;
  }};
  color: ${(props) => {
    return props.$type === "premium" ? props.theme.colors.colorMainRed : props.theme.colors.colorWhite;
  }};
`;

export const StyledCardAvaiable = styled.span<StyledCardAreaProps>`
  grid-area: ${(props) => props.$area};
  font-size: 12px;
`;