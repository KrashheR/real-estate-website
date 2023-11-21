import Constructor from '../../components/ui/constructor/constructor';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import { StyledConstructorContainer, StyledConstructorPage } from './styled';
import { constructorOptions } from './constructorConfig';


function ConstructorPage() {
  return (
    <StyledConstructorPage>
      <StyledConstructorContainer>
        <Title level={TitleLevel.H1} type={TitleType.PAGETITLE}>
          Подобрать квартиру мечты
        </Title>
        <Constructor data={constructorOptions}/>
      </StyledConstructorContainer>
    </StyledConstructorPage>
  );
}

export default ConstructorPage;
