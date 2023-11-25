import { useState, useEffect, ChangeEvent } from 'react';
import {
  StyledBuildingsFilterForm,
  StyledBuildingsFormSubtitle,
  StyledBuildingsFormItem,
  StyledBuildingsFormRadios,
} from './styled';
import FormSelect from '../formsComponents/formSelect/formSelect';
import FormRange from '../formsComponents/formRange/formRange';
import FormRadio, { FormRadioType } from '../formsComponents/formRadio/formRadio';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/buildings/BuildingSlice';
import {
  selectMaxPrice,
  selectMinPrice,
} from '../../../store/reducers/buildings/BuildingSelectors';
import { completionDateOptions, objectTypesOptions } from './buildingsFormConfig';
import React from 'react';

function BuildingsFilterForm() {
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
    <StyledBuildingsFilterForm>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormSubtitle>
          Тип объекта
        </StyledBuildingsFormSubtitle>
        <FormSelect
          id="form-object-type"
          options={objectTypesOptions}
          onChange={handleObjectTypeChange}
        />
      </StyledBuildingsFormItem>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormSubtitle>
          Стоимость объекта, млн. руб.
        </StyledBuildingsFormSubtitle>
        <FormRange
          id="form-object-price"
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </StyledBuildingsFormItem>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormSubtitle>
          Сдача объекта
        </StyledBuildingsFormSubtitle>
        <StyledBuildingsFormRadios>
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
        </StyledBuildingsFormRadios>
      </StyledBuildingsFormItem>
    </StyledBuildingsFilterForm>
  );
}

export default BuildingsFilterForm;
