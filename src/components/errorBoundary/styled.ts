import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 40px;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const StyledErrorText = styled.div`
  display: inline-flex;
  font-size: 24px;
  text-align: center;
`;

export const StyledErrorButton = styled.button`
  display: inline-flex;
  padding: 2vh;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;