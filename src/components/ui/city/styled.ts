import styled from 'styled-components';

export const StyledCity = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.theme.colors.colorBlack};
  font-variation-settings: 'wght' 400;
`;
