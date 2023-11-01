import { StyledApartmentsList } from "./styled";
import Card from "../../../ui/card/card";
import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredCards } from '../../../../store/reducers/Selectors';

function ApartmentsList() {
  const filteredCards = useAppSelector(selectFilteredCards);

  return (
    <StyledApartmentsList>
      {filteredCards.map((item) => {
        return (
          <Card data={item} key={item.id} />
        );
      })}
    </StyledApartmentsList>
  );
}

export default ApartmentsList;
