import { useEffect, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledBuildingsFilterForm,
  StyledBuildingsFormSubtitle,
  StyledBuildingsFormLabel,
  StyledBuildingsFormItem,
  StyledBuildingsFormRadios,
} from './styled';
import FormSelect from '../formsComponents/formSelect/formSelect';
import FormRange from '../formsComponents/formRange/formRange';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  setMinPrice,
  setMaxPrice,
  setObjectType,
  setCompletionDates,
} from '../../../store/reducers/buildings/buildingSlice';
import {
  completionDateOptions,
  objectTypesOptions,
} from './buildingsFormConfig';
import {
  selectCurrentFilterType,
  selectCurrentMinPrice,
  selectCurrentMaxPrice,
  selectCurrentCompletionDates,
} from '../../../store/reducers/buildings/buildingSelectors';
import FormCheckbox from '../formsComponents/formCheckbox/formCheckbox';
import { getFilterModeFromUrl } from '../../../utils/urlFilterUtils';

function BuildingsFilterForm() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const currentFilterType = useAppSelector(selectCurrentFilterType);
  const currentMinPrice = useAppSelector(selectCurrentMinPrice);
  const currentMaxPrice = useAppSelector(selectCurrentMaxPrice);
  const currentCompletionDates = useAppSelector(selectCurrentCompletionDates);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(
      parseFloat(e.target.value),
      currentMaxPrice ?? Infinity,
    );
    dispatch(setMinPrice(newValue));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(parseFloat(e.target.value), currentMinPrice ?? 0);
    dispatch(setMaxPrice(newValue));
  };

  const handleObjectTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setObjectType(e.target.value));
  };

  const handleDeliveryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCompletionDates = e.target.checked
      ? [...currentCompletionDates, e.target.value]
      : currentCompletionDates.filter((date) => date !== e.target.value);

    dispatch(setCompletionDates(newCompletionDates));
  };

  useEffect(() => {
    const currentFilterMode = getFilterModeFromUrl(
      new URLSearchParams(location.search),
    );
    dispatch(setObjectType(currentFilterMode));
  }, [location.search]);

  return (
    <StyledBuildingsFilterForm>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormLabel htmlFor="form-buildings-type">
          Тип объекта
        </StyledBuildingsFormLabel>
        <FormSelect
          id="form-buildings-type"
          options={objectTypesOptions}
          onChange={handleObjectTypeChange}
          value={currentFilterType}
        />
      </StyledBuildingsFormItem>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormSubtitle>
          Стоимость объекта, млн. руб.
        </StyledBuildingsFormSubtitle>
        <FormRange
          id="form-buildings-price"
          minPrice={currentMinPrice}
          maxPrice={currentMaxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </StyledBuildingsFormItem>
      <StyledBuildingsFormItem>
        <StyledBuildingsFormSubtitle>Сдача объекта</StyledBuildingsFormSubtitle>
        <StyledBuildingsFormRadios>
          {completionDateOptions.map((option) => (
            <FormCheckbox
              key={option.id}
              id={option.id}
              name="buildingsCheckbox"
              value={option.value}
              checked={currentCompletionDates.includes(option.value)}
              onChange={handleDeliveryDateChange}
              label={option.label}
            />
          ))}
        </StyledBuildingsFormRadios>
      </StyledBuildingsFormItem>
    </StyledBuildingsFilterForm>
  );
}

export default BuildingsFilterForm;
