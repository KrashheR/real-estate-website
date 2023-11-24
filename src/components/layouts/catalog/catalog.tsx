import { useState } from 'react';
import CatalogFilterForm from '../../forms/catalogFilterForm/catalogFilterForm';
import CatalogList from './catalogList/catalogList';
import {
  StyledCatalogButtonContainer,
  StyledCatalog,
  StyledCatalogSelector,
} from './styled';
import CatalogInfo from './catalogInfo/catalogInfo';
import CatalogButton from './catalogButton/catalogButton';
import { IApartmentData } from '../../../types/IBuilding';
import Modal, { ModalType } from '../../ui/modal/modal';
import { z } from 'zod';

interface CatalogProps {
  apartments: string;
}

function Catalog({ apartments }: CatalogProps) {
  const apartmentsData = JSON.parse(apartments);
  const [selectedRoomType, setSelectedRoomType] = useState<string>('1');
  const [selectedApartment, setSelectedApartment] =
    useState<IApartmentData | null>(null);
  const isApartmentSelected = selectedApartment !== null ? true : false;

  const handleCatalogCardChange = (apartmentDetails: IApartmentData) => {
    setSelectedApartment(apartmentDetails);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    isApartmentSelected && setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

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

  return (
    <StyledCatalog>
      <StyledCatalogSelector>
        <CatalogFilterForm
          selectedRoomType={selectedRoomType}
          setSelectedRoomType={setSelectedRoomType}
        />
        <CatalogList
          selectedRoomType={selectedRoomType}
          apartments={apartmentsData}
          onCatalogCardChange={handleCatalogCardChange}
          selectedApartmentId={selectedApartment?.id}
        />
        <StyledCatalogButtonContainer>
          <CatalogButton
            text={'Выбрать эту квартиру'}
            onClick={handleOpenModal}
            isAppartmentSelected={isApartmentSelected}
          />
        </StyledCatalogButtonContainer>
      </StyledCatalogSelector>
      <CatalogInfo selectedApartment={selectedApartment} />
      <Modal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        onFormSubmit={handleNumberSubmit}
        inputHandler={handlePhoneInput}
        modalType={modalType}
      />
    </StyledCatalog>
  );
}

export default Catalog;
