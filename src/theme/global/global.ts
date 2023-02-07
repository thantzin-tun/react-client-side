import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .link {
    text-decoration: none;
    color: inherit !important;
  }

  .mr-top {
      margin-top: 75px;
  }

  .main_background {
    width: 100%;
    /* height: calc(100vh - 75px); */
    background: linear-gradient(to top, #a8edea 20%, #fed6e3 100%);
    // height: 100vh;
  }


  //No Chat Conversation

  .no-chat {
    // background-color: green;
    height: calc(100vh - 75px);
  }


`;