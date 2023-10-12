import React from 'react';
import { StyledProjectsList } from "./styled";
import Card from "../../../ui/card/card";
import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredByTypeCards } from '../../../../store/reducers/Selectors';

function ProjectsList() {
  const filteredCards = useAppSelector(selectFilteredByTypeCards);

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
