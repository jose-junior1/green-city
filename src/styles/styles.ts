import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.textoPrincipal};
        color: ${colors.textoPrincipal};
        min-height: 100vh;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
    }
`