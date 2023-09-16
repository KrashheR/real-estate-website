import { createGlobalStyle } from 'styled-components';
import RobotoFlexVF from '../fonts/RobotoFlexVF.woff2';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @supports (font-variation-settings: normal) {
    @font-face {
    font-family: "RobotoFlex";
    src: url(${RobotoFlexVF}) format("woff2-variations");
    font-weight: 100 900;
    font-stretch: 25% 151%;
    font-style: normal;
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
`;

export default GlobalStyles;
