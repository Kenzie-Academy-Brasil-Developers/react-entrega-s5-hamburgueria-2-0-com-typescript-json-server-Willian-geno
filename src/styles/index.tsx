import { createGlobalStyle } from "styled-components";

export const GlobalStyle =createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-style: 200px;
    }
    :root{
        --color-green: #24ae60;
        --color-red: #EB5757;
        --color-grey-600: #333333;
        --colort-grey-300:#828282;
        --color-grey-100: #E0E0E0;
        --color-gray-0: #f5f5f5;
        --color-negative:#E60000;
        --color-warning: #FFCD07;
        --color-Sucess:#168821;
    }
`