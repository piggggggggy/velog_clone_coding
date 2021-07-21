import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};

    *{
        box-sizing: border-box;
        /* background: #f8f9fa; */
    }

`;

export default GlobalStyles;