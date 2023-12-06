import styled from "styled-components";

interface StyledConstructorProps {
  isActive: boolean;
}

export const StyledConstructorItemTitle = styled.span`
  text-align: center;
`;

export const StyledConstructorItem = styled.li<StyledConstructorProps>`
  display: ${(props) => props.isActive ? "flex": "none"};
  flex-direction: column;
  gap: 40px;
  min-height: calc(100vh - 300px);
  width: 100%;
  background-color: ${(props) => props.theme.colors.colorWhite};
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledConstructorVariants = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  place-items: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    gap: 10px;
  }
`;

export const StyledConstructorButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledConstructorButton = styled.button`
  width: 100%;
  align-self: center;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  color: ${(props) => props.theme.colors.colorBlack};
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorWhite};
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
`;

export const StyledConstructorLabel = styled.label`
  background-color: ${(props) => props.theme.colors.colorWhite};
  border: 2px solid ${(props) => props.theme.colors.colorMainRed};
`;