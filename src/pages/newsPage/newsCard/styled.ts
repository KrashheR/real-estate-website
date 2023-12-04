import styled from "styled-components";

export const StyledNewsCard = styled.a`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 320px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;

  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 400px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const StyledNewsCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const StyledNewsCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px 20px;
  color:${(props) => props.theme.colors.colorBlack};
`;

export const StyledCardDate = styled.p`
  color: ${(props) => props.theme.colors.colorGray};
  font-size: 12px;
`;