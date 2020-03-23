import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html, body, #root {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #7159c1;
  }
`;
