import styled from 'styled-components';
import { StyledContainer } from '../../../components/layouts/container/styled';

export const StyledApartmentMap = styled.section`
  padding: 30px 0;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledApartmentMapContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
