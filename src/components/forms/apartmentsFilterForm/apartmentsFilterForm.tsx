import { useState, useEffect, ChangeEvent } from 'react';
import {
  StyledApartmentsFilterForm,
  StyledApartmentsFormLabel,
  StyledApartmentsFormItem,
  StyledApartmentFormRadios,
} from './styled';
import FormSelect from '../formSelect/formSelect';
import FormRange from '../formRange/formRange';
import FormRadio, { FormRadioType } from '../formRadio/formRadio';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/CardSlice';
import {
  selectMaxPrice,
  selectMinPrice,
} from '../../../store/reducers/Selectors';
import { deliveryDateOptions, objectTypesOptions } from './apartmentFormConfig';
import React from 'react';

function ApartmentsFilterForm() {
  const dispatch = useAppDispatch();
  const initialMinPrice = useAppSelector(selectMinPrice);
  const initialMaxPrice = useAppSelector(selectMaxPrice);

  const [minPrice, setMinPrice] = useState<number | null>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | null>(initialMaxPrice);
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);
  const [objectType, setObjectType] = useState<string>('Все объекты');

  useEffect(() => {
    if (initialMinPrice !== null) {
      setMinPrice(initialMinPrice);
    }
    if (initialMaxPrice !== null) {
      setMaxPrice(initialMaxPrice);
    }
  }, [initialMinPrice, initialMaxPrice]);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseFloat(e.target.value));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  const handleObjectTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setObjectType(e.target.value);
  };

  const handleDeliveryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value);
  };

  const defaultChecked = '';

  useEffect(() => {
    dispatch(
      setFilters({
        minPrice,
        maxPrice,
        objectType,
        deliveryDate,
      }),
    );
  }, [minPrice, maxPrice, objectType, deliveryDate, dispatch]);

  return (
    <StyledApartmentsFilterForm>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormLabel htmlFor="form-object-type">
          Тип объекта
        </StyledApartmentsFormLabel>
        <FormSelect
          id="form-object-type"
          options={objectTypesOptions}
          onChange={handleObjectTypeChange}
        />
      </StyledApartmentsFormItem>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormLabel htmlFor="form-object-price">
          Стоимость объекта, млн. руб.
        </StyledApartmentsFormLabel>
        <FormRange
          id="form-object-price"
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </StyledApartmentsFormItem>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormLabel htmlFor="form-object-date">
          Сдача объекта
        </StyledApartmentsFormLabel>
        <StyledApartmentFormRadios>
          {deliveryDateOptions.map((option) => {
            return (
              <React.Fragment key={option.id}>
                <FormRadio
                  id={option.id}
                  name={'catalogRadio'}
                  value={option.value}
                  defaultChecked={defaultChecked === option.value}
                  onChange={handleDeliveryDateChange}
                  radioType={FormRadioType.APARTMENT}
                  label={option.label}
                />
              </React.Fragment>
            );
          })}
        </StyledApartmentFormRadios>
      </StyledApartmentsFormItem>
    </StyledApartmentsFilterForm>
  );
}

export default ApartmentsFilterForm;
