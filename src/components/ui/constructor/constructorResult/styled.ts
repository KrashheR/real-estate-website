import styled from "styled-components";

interface StyledConstructorResultProps {
  isActive: boolean;
}

export const StyledConstructorResult = styled.div<StyledConstructorResultProps>`
  display:  ${(props) => props.isActive ? "flex" : "none"};
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledConstructorResultList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  margin-top: 40px;
  grid-gap: 45px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    place-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const StyledConstructorResultEmpty = styled.p`
  font-size: 18px;
`;