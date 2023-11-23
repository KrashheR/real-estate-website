import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredCards } from '../../../../store/reducers/CardSelectors';
import Card from '../../card/card';
import Title, { TitleLevel, TitleType } from '../../title/title';
import { StyledConstructorResult, StyledConstructorResultEmpty, StyledConstructorResultList } from './styled';

interface ConstructorResultProps {
  isActive: boolean;
}

function ConstructorResult({ isActive }: ConstructorResultProps) {
  const resultAppartments = useAppSelector(selectFilteredCards);

  return (
    <StyledConstructorResult isActive={isActive}>
      <Title level={TitleLevel.H2} type={TitleType.CONSTRUCTOR}>
        Вам подходят эти дома
      </Title>
      <StyledConstructorResultList>
        {resultAppartments.map((item) => {
          return <Card data={item} key={item.id} />;
        })}
      </StyledConstructorResultList>
      {resultAppartments.length === 0 && (
        <StyledConstructorResultEmpty>Нет квартир, соответствующих вашим фильтрам.</StyledConstructorResultEmpty>
      )}
    </StyledConstructorResult>
  );
}

export default ConstructorResult;
