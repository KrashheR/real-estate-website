import { ChangeEvent, useMemo } from 'react';
import {
  StyledFormRange,
  StyledFormRangeInput,
  StyledFormRangeInputContainer,
  StyledFormRangeSlider,
  StyledFormRangeSliderTrack,
  StyledFormRangeSliderContainer,
} from './styled';
import { useAppSelector } from '../../../../hooks/redux';
import {
  selectInitialMaxPrice,
  selectInitialMinPrice,
} from '../../../../store/reducers/buildings/buildingSelectors';

interface FormRangeProps {
  id: string;
  minPrice: number | null;
  maxPrice: number | null;
  onMinPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormSliderTrackProps {
  width: number;
  left: number;
  right: number;
}

function FormRange({
  id,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: FormRangeProps) {
  const initialMinPrice = useAppSelector(selectInitialMinPrice) ?? 0;
  const initialMaxPrice = useAppSelector(selectInitialMaxPrice) ?? 100;

  const trackStyle = useMemo(() => {
    const minVal = minPrice ?? initialMinPrice;
    const maxVal = maxPrice ?? initialMaxPrice;
    const minValuePercent =
      ((minVal - initialMinPrice) / (initialMaxPrice - initialMinPrice)) * 100;
    const maxValuePercent =
      ((maxVal - initialMinPrice) / (initialMaxPrice - initialMinPrice)) * 100;

    return {
      left: minValuePercent,
      right: 100 - maxValuePercent,
      width: maxValuePercent - minValuePercent,
    };
  }, [minPrice, maxPrice, initialMinPrice, initialMaxPrice]);

  return (
    <StyledFormRange id={id}>
      <StyledFormRangeInputContainer>
        <label htmlFor="price-min">От</label>
        <StyledFormRangeInput
          type="number"
          id="price-min"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={minPrice ?? ''}
          placeholder="0"
          onChange={onMinPriceChange}
        />
        <p>-</p>
        <label htmlFor="price-max">До</label>
        <StyledFormRangeInput
          type="number"
          id="price-max"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={maxPrice ?? ''}
          placeholder="100"
          onChange={onMaxPriceChange}
        />
      </StyledFormRangeInputContainer>
      <StyledFormRangeSliderContainer>
        <StyledFormRangeSlider
          type="range"
          id="range-slide-min"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={minPrice ?? initialMinPrice}
          step={0.1}
          onChange={onMinPriceChange}
          aria-label="Ползунок минимальной цены"
        />
        <StyledFormRangeSlider
          type="range"
          id="range-slide-max"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={maxPrice ?? initialMaxPrice}
          step={0.1}
          onChange={onMaxPriceChange}
          aria-label="Ползунок максимальной цены"
        />
        <StyledFormRangeSliderTrack
          width={trackStyle.width}
          left={trackStyle.left}
          right={trackStyle.right}
        />
      </StyledFormRangeSliderContainer>
    </StyledFormRange>
  );
}

export default FormRange;
