import styled from 'styled-components';

export const StyledNotFoundPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 200px);
  gap: 10px;
  color: ${(props) => props.theme.colors.colorBlack};
`;
