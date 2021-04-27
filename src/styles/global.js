import { createGlobalStyle } from "styled-components";

import imagemFundo from "../assets/pagina.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body{
    background: #5CF8F8 url(${imagemFundo}) no-repeat ;
    -webkit-font-smoothing: antialiased;
    color:#000000;
    background-size: cover;
    background-attachment: fixed;
  }

  body, input, button{
    font: 16px,Roboto, sans-serif;
  }

  button{
    cursor: pointer
  }

`;