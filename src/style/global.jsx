import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --background: #ffff;
        --color-white-fixed: #ffff;
        --color-primary: #27AE60;
        --color-primary-opc: #93D7AF;
        --color-secondary: #EB5757;
        --color-grey-100: #333333;
        --color-grey-50: #828282;
        --color-grey-20: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
    }
    
    html, body{
        width: 100vw;
        height: 100vh;
    }


`;
