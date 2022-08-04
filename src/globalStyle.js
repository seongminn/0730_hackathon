import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: black;
    color: white;
    font-family: "BMHANNAAir", sans-serif;
    font-size: 1.2rem;
  }
`;

export default GlobalStyle;
