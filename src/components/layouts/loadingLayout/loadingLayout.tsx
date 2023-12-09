import Loader from '../../ui/loader/loader';
import { StyledLoadingLayout, StyledLoadingText } from './styled';

function LoadingLayout() {
  return (
    <StyledLoadingLayout>
      <Loader />
      <StyledLoadingText>Загрузка...</StyledLoadingText>
    </StyledLoadingLayout>
  );
}

export default LoadingLayout;
