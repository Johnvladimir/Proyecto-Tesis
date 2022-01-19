import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset Style */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    html {
        font-size: 1em;
    }

    body {
        min-height: 100vh;
        font-family: "Noto Sans Thai UI", sans-serif;
        color: #141414;
        background-color: #f2f6f9;
    }

    .app-container {
        display: flex;
        flex-direction: column;
        /*gap: 10px;*/
        padding: 3rem 6rem;
    }

    @media screen and (max-width: 1024px) {
        .app-container {
            padding: 1rem 2rem;
        }
    }

    table {
        border-collapse: collapse;
        width: 100%;
        
    }

    th,
    td {
        text-align: left;
        padding: 0.75rem;
        font-size: 18px;
    }


    tr {
        border-bottom: 1px solid #e9e9e9;
    }

    td {
        background-color: #fff;
    }

    form {
        display: flex;
        gap: 5px;
    }

    form td:last-child {
        display: flex;
    }

    form * {
        font-size: 18px;
    }

    input {
        padding: 8px;
        border: 1px solid #000;
        border-radius: 8px;
    }

    

    

`;
