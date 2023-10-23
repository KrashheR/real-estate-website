import { StyledProjectsList } from "./styled";
import Card from "../../../ui/card/card";
import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredCards } from '../../../../store/reducers/Selectors';

function ProjectsList() {
  const filteredCards = useAppSelector(selectFilteredCards);

  return (
    <StyledProjectsList>
      {filteredCards.map((item) => {
        return (
          <Card data={item} key={item.id} />
        );
      })}
    </StyledProjectsList>
  );
}

export default ProjectsList;
