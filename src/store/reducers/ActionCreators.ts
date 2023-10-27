import { AppDispatch } from "../store";
import { cardSlice } from "./CardSlice";
import { promoSlice } from "./PromoSlice";

export const fetchCards = () => {
  return (dispatch: AppDispatch) => {
    dispatch(cardSlice.actions.cardsFetching());
    fetch("https://www.krashher.ru/real-estate/api/get-cards.php")
      .then(response => response.json())
      .then(data => dispatch(cardSlice.actions.cardsFetchingSuccess(data)))
      .catch(error => dispatch(cardSlice.actions.cardsFetchingError(error.toString())));
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