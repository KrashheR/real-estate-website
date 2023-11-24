import { useState, useEffect, ChangeEvent } from 'react';
import {
  StyledApartmentsFilterForm,
  StyledApartmentsFormSubtitle,
  StyledApartmentsFormItem,
  StyledApartmentFormRadios,
} from './styled';
import FormSelect from '../formSelect/formSelect';
import FormRange from '../formRange/formRange';
import FormRadio, { FormRadioType } from '../formRadio/formRadio';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/BuildingSlice';
import {
  selectMaxPrice,
  selectMinPrice,
} from '../../../store/reducers/BuildingSelectors';
import { completionDateOptions, objectTypesOptions } from './apartmentFormConfig';
import React from 'react';

function ApartmentsFilterForm() {
  const dispatch = useAppDispatch();
  const initialMinPrice = useAppSelector(selectMinPrice);
  const initialMaxPrice = useAppSelector(selectMaxPrice);

  const [minPrice, setMinPrice] = useState<number | null>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | null>(initialMaxPrice);
  const [completionDate, setCompletionDate] = useState<string | null>(null);
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
    setCompletionDate(e.target.value);
  };

  const defaultChecked = '';

  useEffect(() => {
    dispatch(
      setFilters({
        minPrice,
        maxPrice,
        objectType,
        completionDate,
      }),
    );
  }, [minPrice, maxPrice, objectType, completionDate, dispatch]);

  return (
    <StyledApartmentsFilterForm>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormSubtitle>
          Тип объекта
        </StyledApartmentsFormSubtitle>
        <FormSelect
          id="form-object-type"
          options={objectTypesOptions}
          onChange={handleObjectTypeChange}
        />
      </StyledApartmentsFormItem>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormSubtitle>
          Стоимость объекта, млн. руб.
        </StyledApartmentsFormSubtitle>
        <FormRange
          id="form-object-price"
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </StyledApartmentsFormItem>
      <StyledApartmentsFormItem>
        <StyledApartmentsFormSubtitle>
          Сдача объекта
        </StyledApartmentsFormSubtitle>
        <StyledApartmentFormRadios>
          {completionDateOptions.map((option) => {
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
