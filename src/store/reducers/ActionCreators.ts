import { AppDispatch } from "../store";
import { cardSlice } from "./CardSlice";


export const fetchCards = () => {
  return (dispatch: AppDispatch) => {
    dispatch(cardSlice.actions.cardsFetching());
    fetch("https://www.krashher.ru/real-estate/api/get-cards.php")
      .then(response => response.json())
      .then(data => dispatch(cardSlice.actions.cardsFetchingSuccess(data)))
      .catch(error => dispatch(cardSlice.actions.cardsFetchingError(error.toString())));
  }
}