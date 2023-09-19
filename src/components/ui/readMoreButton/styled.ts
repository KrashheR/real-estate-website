import styled from 'styled-components';

export const StyledReadMoreButton = styled.button`
  display: block;
  border: none;
  padding: 8px;
  border-radius: 25px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.colorMainRed};
  background-color: ${(props) => props.theme.colors.colorWhite};
  cursor: pointer;
`;
