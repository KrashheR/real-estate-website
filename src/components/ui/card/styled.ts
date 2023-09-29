import styled from "styled-components";
import ReadMoreButton from "../readMoreButton/readMoreButton";
import { StyledReadMoreButton } from "../readMoreButton/styled";

type StyledPromoCardProps = {
  $area: string;
};

export const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
  width: 370px;
  height: 410px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
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
  color: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledCardButton = styled(StyledReadMoreButton)`
  grid-area: button;
  justify-self: end;
  height: 40px;
`;

export const StyledCardAvaiable = styled.span<StyledPromoCardProps>`
  grid-area: ${(props) => props.$area};
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorWhite};
`;