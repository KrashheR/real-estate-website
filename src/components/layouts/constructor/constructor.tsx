import { useEffect, useState } from 'react';
import { StyledConstructor, StyledConstructorItemsList } from './styled';
import ConstructorResult from './constructorResult/constructorResult';
import ConstructorItem from './constructorItem/constructorItem';
import { IConstructor, UserChoices } from '../../../types/IConstructor';
import { useAppDispatch } from '../../../hooks/redux';
import { setFilters } from '../../../store/reducers/buildings/buildingSlice';
import ProgressBar from '../../ui/progressBar/progressBar';

interface ConstructorProps {
  constructorQuestionsData: IConstructor[];
}

function Constructor({ constructorQuestionsData }: ConstructorProps) {
  const dispatch = useAppDispatch();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [userChoices, setUserChoices] = useState<UserChoices>({
    minPrice: 0,
    maxPrice: 999,
    objectType: '',
    completionDates: [],
  });
  const [isResultActive, setResultActive] = useState<boolean>(false);

  const handleNext = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleBack = () => {
    setQuestionNumber(questionNumber - 1);
  };

  useEffect(() => {
    if (questionNumber >= constructorQuestionsData.length) {
      dispatch(setFilters(userChoices));
      setResultActive(true);
    }
  }, [questionNumber, constructorQuestionsData.length, userChoices, dispatch]);

  return (
    <StyledConstructor>
      <StyledConstructorItemsList>
        {constructorQuestionsData.map((dataItem: IConstructor) => {
          return (
            <ConstructorItem
              dataItem={dataItem}
              key={dataItem.id}
              handleNext={handleNext}
              handleBack={handleBack}
              setUserChoices={setUserChoices}
              questionNumber={questionNumber}
            />
          );
        })}
        <ConstructorResult isActive={isResultActive} />
      </StyledConstructorItemsList>
      <ProgressBar
        currentQuestion={questionNumber}
        totalQuestions={constructorQuestionsData.length}
      />
    </StyledConstructor>
  );
}

export default Constructor;
