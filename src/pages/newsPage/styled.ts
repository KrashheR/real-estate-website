import styled from 'styled-components';
import { StyledContainer } from '../../components/layouts/container/styled';

export const StyledNewsPage = styled(StyledContainer)`
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${(props) => props.theme.colors.colorBlack};
  min-height: calc(100vh - 200px);
`;

export const StyledNewsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
