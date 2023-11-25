import { ChangeEvent } from 'react';
import {
  StyledFormRange,
  StyledFormRangeInput,
  StyledFormRangeContainer,
} from './styled';
import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredBuildings } from '../../../../store/reducers/buildings/BuildingSelectors';
import { getMinAndMaxApartmentPrice } from '../../../../utils/buildingPriceUtils';

interface FormRangeProps {
  id: string;
  minPrice: number | null;
  maxPrice: number | null;
  onMinPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormRange({
  id,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: FormRangeProps) {
  const cards = useAppSelector(selectFilteredBuildings);
  const [initialMinPrice, initialMaxPrice] = getMinAndMaxApartmentPrice(cards);

  return (
    <StyledFormRange id={id}>
      <StyledFormRangeContainer>
        <label htmlFor="price-min">От</label>
        <StyledFormRangeInput
          type="number"
          id="price-min"
          min={initialMinPrice}
          max="100"
          placeholder="0"
          value={minPrice ?? ''}
          onChange={onMinPriceChange}
        />
      </StyledFormRangeContainer>
      <p>-</p>
      <StyledFormRangeContainer>
        <label htmlFor="price-max">До</label>
        <StyledFormRangeInput
          type="number"
          id="price-max"
          min="1"
          max={initialMaxPrice}
          placeholder="100"
          value={maxPrice ?? ''}
          onChange={onMaxPriceChange}
        />
      </StyledFormRangeContainer>
    </StyledFormRange>
  );
}

export default FormRange;
