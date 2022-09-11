import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
              --blue: #0f45a123
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: 'Manrope', sans-serif;
  }

  html {
    scroll-behavior: smooth;

    @media (min-width: 1024px) {
      font-size: 93, 75%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 87, 5%;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 81, 25%;
    }

    @media (max-width: 374px) {
      font-size: 68, 75%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
  }

`;

export default GlobalStyle;
