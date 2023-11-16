import styled from 'styled-components';
import { StyledContainer } from '../../components/layouts/container/styled';

export const StyledAboutContainer = styled(StyledContainer)`
  margin: 40px 0;
`;

export const StyledAboutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledAboutInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`;
