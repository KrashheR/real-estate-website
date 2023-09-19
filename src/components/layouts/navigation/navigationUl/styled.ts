import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin-right: auto;
  font-size: 16px;
  color: ${(props) => props.theme.colors.colorBlack};
  font-variation-settings: 'wght' 400;
`;

export const StyledLi = styled.li`
  position: relative;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    right: 50%;
    left: 50%;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: ${(props) => props.theme.colors.colorMainRed};
    transition: all 0.4s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};

    &:before {
      width: 100%;
      right: 0%;
      left: 0%;
    }
  }
`;

export const StyledA = styled.a`
  cursor: pointer;
`;
