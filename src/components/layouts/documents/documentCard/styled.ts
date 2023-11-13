import styled from "styled-components";

export const StyledDocumentsCard = styled.a`
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
`;

export const StyledDocumentsCardImage = styled.img`
  width: 80px;
`;

export const StyledDocumentsCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StyledDocumentsCardDownloadText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorWhite};
`;