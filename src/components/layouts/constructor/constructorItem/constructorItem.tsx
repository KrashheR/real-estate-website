import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { IConstructor, UserChoices } from '../../../../types/IConstructor';
import FormRadio, {
  FormRadioType,
} from '../../../forms/formsComponents/formRadio/formRadio';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../ui/title/title';
import {
  StyledConstructorButton,
  StyledConstructorButtonsContainer,
  StyledConstructorItem,
  StyledConstructorItemTitle,
  StyledConstructorVariants,
} from './styled';

interface ConstructorItemProps {
  dataItem: IConstructor;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handleBack: MouseEventHandler<HTMLButtonElement>;
  questionNumber: number;
  setUserChoices: React.Dispatch<React.SetStateAction<UserChoices>>;
}

function ConstructorItem({
  dataItem,
  handleBack,
  handleNext,
  questionNumber,
  setUserChoices,
}: ConstructorItemProps) {
  const [isVariantSelected, setVariantSelected] = useState<boolean>(false);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVariantSelected(true);
    const { value } = e.target;
    let updatedValue: string | number = value;

    if (dataItem.filter === 'maxPrice') {
      updatedValue = parseInt(value, 10);
    }

    setUserChoices((prev) => ({ ...prev, [dataItem.filter]: updatedValue }));
  };

  return (
    <StyledConstructorItem isActive={dataItem.id === questionNumber}>
      <StyledConstructorItemTitle>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.XL}
          weight={TitleWeight.SEMIBOLD}
        >
          {dataItem.question}
        </Title>
      </StyledConstructorItemTitle>
      {dataItem.variants.length > 0 && (
        <StyledConstructorVariants>
          {dataItem.variants.map((item, index) => (
            <FormRadio
              key={dataItem.id + '-' + index}
              id={`option-${dataItem.question}-${index}`}
              name={dataItem.question}
              value={item.value}
              label={item.answer}
              onChange={handleRadioChange}
              radioType={FormRadioType.CONSTRUCTOR}
            />
          ))}
        </StyledConstructorVariants>
      )}
      <StyledConstructorButtonsContainer>
        {questionNumber > 0 && (
          <StyledConstructorButton onClick={handleBack} isActive={true}>
            Назад
          </StyledConstructorButton>
        )}
        <StyledConstructorButton
          onClick={handleNext}
          isActive={isVariantSelected}
        >
          Вперёд
        </StyledConstructorButton>
      </StyledConstructorButtonsContainer>
    </StyledConstructorItem>
  );
}

export default ConstructorItem;
