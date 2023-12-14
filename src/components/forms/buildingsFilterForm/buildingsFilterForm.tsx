import { useState, useEffect, ChangeEvent } from 'react';
import {
  StyledBuildingsFilterForm,
  StyledBuildingsFormSubtitle,
  StyledBuildingsFormItem,
  StyledBuildingsFormRadios,
} from './styled';
import FormSelect from '../formsComponents/formSelect/formSelect';
import FormRange from '../formsComponents/formRange/formRange';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/buildings/buildingSlice';
import { completionDateOptions, objectTypesOptions } from './buildingsFormConfig';
import { selectInitialMinPrice, selectInitialMaxPrice } from '../../../store/reducers/buildings/buildingSelectors';
import useDebouncedFunction from '../../../hooks/debounce';
import FormCheckbox from '../formsComponents/formCheckbox/formCheckbox';

function BuildingsFilterForm() {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<number | null>(useAppSelector(selectInitialMinPrice));
  const [maxPrice, setMaxPrice] = useState<number | null>(useAppSelector(selectInitialMaxPrice));

  const [completionDates, setCompletionDates] = useState<string[]>([]);
  const [objectType, setObjectType] = useState<string>('Все объекты');

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(parseFloat(e.target.value), maxPrice ?? Infinity);
    setMinPrice(newValue);
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(parseFloat(e.target.value), minPrice ?? 0);
    setMaxPrice(newValue);
  };

  const handleObjectTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setObjectType(e.target.value);
  };

  const handleDeliveryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCompletionDates(prevDates => [...prevDates, e.target.value]);
    } else {
      setCompletionDates(prevDates => prevDates.filter(date => date !== e.target.value));
    }
  };

  const defaultChecked = '';

  useEffect(() => {
    dispatch(setFilters({
      minPrice,
      maxPrice,
      objectType,
      completionDates,
    }));
  }, [objectType, completionDates, dispatch]);

  const debouncedSetPriceFilters = useDebouncedFunction((minPrice, maxPrice) => {
    dispatch(setFilters({
      minPrice,
      maxPrice,
      objectType,
      completionDates,
    }));
  }, 300);

  useEffect(() => {
    debouncedSetPriceFilters(minPrice, maxPrice);
  }, [minPrice, maxPrice]);

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
              <FormCheckbox
              id={option.id}
              key={option.id}
              name={'buildingsCheckbox'}
              value={option.value}
              defaultChecked={defaultChecked === option.value}
              onChange={handleDeliveryDateChange}
              label={option.label}
            />
            );
          })}
        </StyledBuildingsFormRadios>
      </StyledBuildingsFormItem>
    </StyledBuildingsFilterForm>
  );
}

export default BuildingsFilterForm;
