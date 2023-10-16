import { createGlobalStyle } from 'styled-components';
import RobotoFlexVFWoff from '../fonts/RobotoFlexVF.woff2';
import RobotoFlexVFTtf from '../fonts/RobotoFlexVF.ttf';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../fonts/Roboto-Medium.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @supports (font-variation-settings: normal) {
    @font-face {
    font-family: "RobotoFlex";
    src: url(${RobotoFlexVFWoff}) format("woff2-variations"),
        url(${RobotoFlexVFTtf}) format("truetype-variations");
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
    scrollbar-gutter: stable;
  }

  body {
    font-size: 14px;
    font-family: 'RobotoFlex', 'Roboto', sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  button, form, select, input {
    font-family: 'RobotoFlex', 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
