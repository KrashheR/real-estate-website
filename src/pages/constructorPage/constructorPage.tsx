import Constructor from '../../components/ui/constructor/constructor';
import { StyledConstructorContainer, StyledConstructorPage } from './styled';
import { constructorOptions } from './constructorConfig';


function ConstructorPage() {
  return (
    <StyledConstructorPage>
      <StyledConstructorContainer>
        <Constructor data={constructorOptions}/>
      </StyledConstructorContainer>
    </StyledConstructorPage>
  );
}

export default ConstructorPage;
