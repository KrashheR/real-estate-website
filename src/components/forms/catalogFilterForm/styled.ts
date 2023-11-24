import styled from 'styled-components';

export const StyledCatalogFilterForm = styled.form`
  display: flex;
  justify-content: space-between;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    justify-content: flex-start;
    gap: 10px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    justify-content: center;
    width: 185px;
    flex-wrap: wrap;
    flex-shrink: 3;
  }
`;

