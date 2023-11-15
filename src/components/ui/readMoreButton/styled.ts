import styled from 'styled-components';

export const StyledReadMoreButton = styled.button`
  display: block;
  border: none;
  padding: 8px;
  border-radius: 10px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorButtonText};
  background-color: ${(props) => props.theme.colors.colorButtonPrimary};
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover{
    border-radius: 30px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 12px;
    padding: 6px;
    width: 80px;
    border-radius: 30px;
  }
`;
