import styled from "styled-components";

export const StyledApartmentDocumentsCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 200px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
  color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.01);
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 45%;
    height: 130px;
    padding: 15px;
  }
`;

export const StyledApartmentDocumentsCardImage = styled.img`
  width: 80px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 30px;
  }
`;

export const StyledApartmentDocumentsCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledApartmentDocumentsCardDownloadText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorWhite};

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 12px;
  }
`;