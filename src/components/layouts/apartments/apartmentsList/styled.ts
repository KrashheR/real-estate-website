import styled from "styled-components";

export const StyledApartmentsList = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  min-height: 200px;
`;

export const StyledApartmentsListPlaceholderTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  padding-top: 50px;
  font-size: 18px;
`;