import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif !important;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Nunito', sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
