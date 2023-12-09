import styled from "styled-components";

export const StyledLoadingLayout = styled.div`
  height: calc(100vh - 200px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledLoadingText = styled.h1`
  color: ${(props) => props.theme.colors.colorMainRed};
  font-weight: 500;
  font-size: 18px;
`;