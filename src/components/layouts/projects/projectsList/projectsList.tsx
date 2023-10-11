import React from 'react';
import { StyledProjectsList } from "./styled";
import Card from "../../../ui/card/card";
import { ICard } from '../../../../models/ICard';
import { useAppSelector } from '../../../../hooks/redux';
import { selectSortedCards } from '../../../../store/reducers/Selectors';


interface FilterValues {
  minPrice: number | null;
  maxPrice: number | null;
  objectType: string;
  deliveryDate: number | null;
}

interface ProjectsListProps {
  filters: FilterValues;
}


const filterData = (data: ICard[], filters: FilterValues): ICard[] => {
  return data.filter(item => {
    if (filters.deliveryDate !== null) {
      const deadlineYear = parseInt(item.deadline, 10);
      if (deadlineYear !== filters.deliveryDate) {
        return false;
      }
    }
    return true;
  });
};

function ProjectsList({ filters }: ProjectsListProps) {
  const sortedCards = useAppSelector(selectSortedCards);
  const filteredData = filterData(sortedCards, filters);

  return (
    <StyledProjectsList>
      {filteredData.map((item) => {
        return (
          <Card data={item} key={item.id} />
        );
      })}
    </StyledProjectsList>
  );
}

export default ProjectsList;
