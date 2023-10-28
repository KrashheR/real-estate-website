import { Action, ThunkAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { cardSlice } from "./CardSlice";
import { promoSlice } from "./PromoSlice";
import { getMinAndMaxApartmentPrice } from "../../utils/cardPriceUtils";

export const fetchCards = () => {
  return (dispatch: AppDispatch) => {
    dispatch(cardSlice.actions.cardsFetching());
    fetch("https://www.krashher.ru/real-estate/api/get-cards.php")
      .then(response => response.json())
      .then(data => {
        dispatch(cardSlice.actions.cardsFetchingSuccess(data));
        dispatch(updateMinMaxPrices());
      })
      .catch(error => dispatch(cardSlice.actions.cardsFetchingError(error.toString())));
  }
}

export const updateMinMaxPrices = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const { cards } = getState().cardReducer;
    const [minPrice, maxPrice] = getMinAndMaxApartmentPrice(cards);
    dispatch(cardSlice.actions.setMinMaxPrice({ min: minPrice, max: maxPrice }));
  }
}

export const fetchPromos = () => {
  return (dispatch: AppDispatch) => {
    dispatch(promoSlice.actions.promosFetching());
    fetch('https://krashher.ru/real-estate/api/get-slideshow.php')
      .then(response => response.json())
      .then(data => dispatch(promoSlice.actions.promosFetchingSuccess(data)))
      .catch(error => dispatch(promoSlice.actions.promosFetchingError(error.toString())));
  }
}

