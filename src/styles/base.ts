import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        background: ${props => props.theme.colors.darkBlue};
        font-family: Helvetica, Arial, sans-serif;
        font-size: ${props => props.theme.spacing.medium};
        margin: 0
    }
    button {
        cursor: pointer;
    }
    button:disabled {
        cursor: default;
    }
`;

export default GlobalStyle;
