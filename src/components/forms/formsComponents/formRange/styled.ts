import styled from 'styled-components';
import { FormSliderTrackProps } from './formRange';

export const StyledFormRange = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 60px;
  width: 370px;
  border-radius: 25px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 28vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 80vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 50px;
    font-size: 14px;
  }
`;

export const StyledFormRangeInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 16px;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
`;

export const StyledFormRangeInput = styled.input`
  width: 80px;
  height: 65%;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-radius: 25px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
`;

export const StyledFormRangeSliderContainer = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
`;

export const StyledFormRangeSlider = styled.input.attrs({ type: 'range' })`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 14px;
  background: transparent;
  position: absolute;
  bottom: 1px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    bottom: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    background: ${(props) => props.theme.colors.colorMainRed};
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;

    @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
      width: 16px;
      height: 16px;
    }
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.colors.colorMainRed};
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
  }

  &::-ms-thumb {
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.colors.colorMainRed};
    cursor: pointer;
    border-radius: 50%;
    z-index: 2;
  }

  &::-webkit-slider-runnable-track {
    height: 0px;
  }

  &::-moz-range-track {
    height: 0px;
  }

  &::-ms-track {
    height: 0px;
  }
`;

export const StyledFormRangeSliderTrack = styled.span<FormSliderTrackProps>`
  position: absolute;
  bottom: 0;
  background: ${(props) => props.theme.colors.colorMainRed};
  height: 2px;
  width: ${(props) => props.width}%;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
  z-index: 0;
  pointer-events: none;
  border-radius: 25px;
`;
