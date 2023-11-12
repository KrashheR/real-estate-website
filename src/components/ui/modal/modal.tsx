import {
  StyledCloseButton,
  StyledConfirmButton,
  StyledModalBackdrop,
  StyledModalBody,
  StyledModalForm,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalTitle,
  StyledModalText,
  StyledModalInput,
} from './styled';
import { ModalContent } from './modalConfig';

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: () => void;
  modalType: ModalType;
}

export enum ModalType {
  PHONEFORM = "phoneForm",
  SUCCESS = "success",
  ERROR = 'error',
}

function Modal({ onClose, isModalOpen, inputHandler, onFormSubmit, modalType }: ModalProps) {
  if (!isModalOpen) return null;
  const {title, description, inputPhone} = ModalContent[modalType];

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalBackdrop onClick={handleBackdropClick}>
      <StyledModalForm>
        <StyledModalHeader>
          <StyledModalTitle modalType={modalType}>{title}</StyledModalTitle>
          <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
        </StyledModalHeader>
        <StyledModalBody>
          <StyledModalText>{description}</StyledModalText>
          <StyledModalFooter>
            {inputPhone && <StyledModalInput type="tel" placeholder="Ваш номер телефона" onChange={inputHandler} modalType={modalType}/>}
            <StyledConfirmButton onClick={modalType === "success" ? onClose : onFormSubmit}>
              Подтвердить
            </StyledConfirmButton>
          </StyledModalFooter>
        </StyledModalBody>
      </StyledModalForm>
    </StyledModalBackdrop>
  );
}

export default Modal;
