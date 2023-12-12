import {
  StyledFooter,
  StyledFooterProjectsList,
  StyledFooterProject,
  StyledFooterProjectLink,
  StyledFooterContainer,
  StyledFooterTitle,
  StyledFooterAbout,
  StyledFooterAdress,
  StyledFooterPhone,
  StyledFooterPhoneTime,
} from './styled';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import { useAppSelector } from '../../../hooks/redux';
import { selectBuildings } from '../../../store/reducers/buildings/buildingSelectors';
import { IBuilding } from '../../../types/IBuilding';
import { Link } from 'react-router-dom';

function Footer() {
  const buildings = useAppSelector(selectBuildings);

  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Link to="/">
          <Logo srcImage={logoImage} />
        </Link>
        <StyledFooterProjectsList>
          <StyledFooterTitle>Наши проекты:</StyledFooterTitle>
          {buildings.map((building: IBuilding) => {
            return (
              <StyledFooterProject key={building.id}>
                <StyledFooterProjectLink to={'apartment/' + building.id}>
                  {building.title}
                </StyledFooterProjectLink>
              </StyledFooterProject>
            );
          })}
        </StyledFooterProjectsList>
        <StyledFooterAbout>
          <StyledFooterTitle>О компании</StyledFooterTitle>
          <StyledFooterAdress>
            105064, г. Москва, ул. Покровка, 50/2
          </StyledFooterAdress>
          <StyledFooterPhone href={'tel:+7123456789'}>
            +7123456789
          </StyledFooterPhone>
          <StyledFooterPhoneTime>
            Ежедневно с 8:00 до 22:00
          </StyledFooterPhoneTime>
        </StyledFooterAbout>
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
