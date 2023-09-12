import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
        padding: 2rem;
        background-color: #212121;
        color: #878787;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
    }
`;

export default GlobalStyles;
