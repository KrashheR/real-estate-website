import styled from "styled-components";
import ReadMoreButton from "../readMoreButton/readMoreButton";
import { StyledReadMoreButton } from "../readMoreButton/styled";

type StyledPromoCardProps = {
  $area: string;
};


export const StyledCard = styled.a`
  display: block;
  width: 370px;
  height: 410px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
`;

export const StyledCardAvaiableContainer = styled.div`
  display: grid;
  grid-template-areas: 'house housePrice button'
                        'parking parkingPrice button';
  align-items: center;
  padding: 20px;

`;

export const StyledCardButton = styled(StyledReadMoreButton)`
  grid-area: button;
  justify-self: end;
`;

export const StyledCardAvaiable = styled.span<StyledPromoCardProps>`
  grid-area: ${(props) => props.$area};
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorWhite};
`;