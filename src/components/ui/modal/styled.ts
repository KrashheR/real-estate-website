import styled from 'styled-components';
import { ModalType } from './modal';

interface ModalProps {
  modalType: ModalType;
}

export const StyledModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 480px;
  height: 185px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 20px;
    width: 320px;
    height: fit-content;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    padding: 12px;
    width: 280px;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledModalTitle = styled.h3<ModalProps>`
  font-size: 20px;
  color: ${(props) => props.modalType === "error" ? props.theme.colors.colorMainRed : props.theme.colors.colorBlack};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 18px;
  }
`;

export const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 15px;


  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap:15px;
  }
`;

export const StyledModalText = styled.p`
  font-size: 16px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
`;

export const StyledModalInput = styled.input<ModalProps>`
  display: inline-block;
  width: 200px;
  font-size: 14px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.modalType === "error" ? props.theme.colors.colorMainRed : props.theme.colors.colorBlack};
  outline: none;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 150px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 12px;
    width: 130px;
  }
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledConfirmButton = styled.button`
  background-color: ${(props) => props.theme.colors.colorMainRed};
  color: ${(props) => props.theme.colors.colorWhite};
  border: 2px solid ${(props) => props.theme.colors.colorMainRed};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover{
    background-color: ${(props) => props.theme.colors.colorWhite};
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;
