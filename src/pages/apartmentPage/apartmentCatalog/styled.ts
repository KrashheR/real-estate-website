import styled from 'styled-components';
import { StyledContainer } from '../../../components/layouts/container/styled';

export const StyledApartmentCatalogSelector = styled.div``;

export const StyledApartmentCatalog = styled.section`
  padding: 30px 0;
  gap: 40px;
  margin-top: 60px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledCatalogContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
