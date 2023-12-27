import Description, {
  DescriptionSize,
} from '../../components/ui/description/description';
import MyRouteButton from '../../components/ui/myRouteButton/myRouteButton';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../components/ui/title/title';
import NotFoundImage from './notFoundImage/notFoundImage';
import { StyledNotFoundPage } from './styled';

function NotFoundPage() {
  return (
    <StyledNotFoundPage>
      <NotFoundImage src="https://www.krashher.ru/real-estate/images/404/cat404.webp" />
      <Title
        size={TitleSize.XL}
        weight={TitleWeight.BOLD}
        level={TitleLevel.H1}
      >
        Упс!
      </Title>
      <Description size={DescriptionSize.M}>
        Указанной страницы не существует
      </Description>
      <MyRouteButton link="/">Вернуться на главную</MyRouteButton>
    </StyledNotFoundPage>
  );
}

export default NotFoundPage;
