import { createGlobalStyle } from 'styled-components';
import RobotoFlexVFWoff from '../fonts/RobotoFlexVF.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url('https://www.krashher.ru/real-estate/fonts/Roboto-Regular.ttf') format("truetype");
    font-weight: 400;
    font-style: regular;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url('https://www.krashher.ru/real-estate/fonts/Roboto-Medium.ttf') format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url('https://www.krashher.ru/real-estate/fonts/Roboto-Bold.ttf') format("truetype");
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }

  @supports (font-variation-settings: normal) {
    @font-face {
    font-family: "RobotoFlex";
    src: url(${RobotoFlexVFWoff}) format("woff2-variations"),
        url('https://www.krashher.ru/real-estate/fonts/RobotoFlexVF.ttf') format("truetype-variations");
    font-weight: 100 900;
    font-stretch: 25% 151%;
    font-style: normal;
    font-display: swap;
  };
}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;

  }

  body {
    font-size: 14px;
    font-family: 'RobotoFlex', 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }

  button, form, select, input {
    font-family: 'RobotoFlex', 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
