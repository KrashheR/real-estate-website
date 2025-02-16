import { useState } from 'react';
import { z } from 'zod';
import Modal, { ModalType } from '../../components/ui/modal/modal';
import Title, { TitleLevel, TitleSize, TitleWeight } from '../../components/ui/title/title';
import YandexMap from '../../components/layouts/yandexMap/yandexMap';
import AboutButton from './aboutButton/aboutButton';
import {
  StyledAboutContainer,
  StyledAboutHeader,
  StyledAboutInfo,
} from './styled';
import AboutPerson from './aboutPerson/aboutPerson';
import AboutContact from './aboutContact/aboutContact';

function AboutPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalType, setModalType] = useState<ModalType>(ModalType.PHONEFORM);

  const phoneSchema = z
    .string()
    .regex(/^(8|\+7)(\d{10})$/, 'Неверный формат номера телефона');

  const handleNumberSubmit = () => {
    const validationResult = phoneSchema.safeParse(phoneNumber);
    if (validationResult.success) {
      setModalType(ModalType.SUCCESS);
    } else {
      setModalType(ModalType.ERROR);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <StyledAboutContainer>
      <StyledAboutHeader>
      <Title
        level={TitleLevel.H2}
        size={TitleSize.XL}
        weight={TitleWeight.BOLD}
      >
          Наш офис на карте
        </Title>
        <AboutButton onClick={handleOpenModal} />
        <Modal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          onFormSubmit={handleNumberSubmit}
          inputHandler={handlePhoneInput}
          modalType={modalType}
        />
      </StyledAboutHeader>
      <YandexMap latitude={55.76308} longitude={37.655476} />
      <StyledAboutInfo>
        <AboutPerson />
        <AboutContact />
      </StyledAboutInfo>
    </StyledAboutContainer>
  );
}

export default AboutPage;
