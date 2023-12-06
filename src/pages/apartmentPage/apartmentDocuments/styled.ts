import styled from "styled-components";

export const StyledApartmentDocuments = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px 0;
`;

export const StyledApartmentDocumentsHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 10px;
`;

export const StyledApartmentDocumentsCards = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;