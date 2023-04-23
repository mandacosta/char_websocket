import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }

    :root{
        --color-primary: #df765a;
        --color-primary-negative: #df765a9e;

        --grey-3:#868e9636;
        --grey-2:#343B41;
        --grey-1:#868E96;
        --grey-0:#F8F9FA;
        --white: #fff;
        
    }

    .App{
        width: 100vw;
        height: 100vh;
        display:flex;
        align-items: center;
        justify-content: center;

        &::after{
            content: '';
            display: block;
            position: absolute;
            z-index:-1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("src/assets/background_join.jpg");
            background-size: contain;
            opacity: 0.05; /* Definindo a opacidade para 50% */
        }
    }

    .highlight{
        color: var(--color-primary);
        font-weight: bolder;
    }

    button{
        border: none;
        border-radius: 20px;
        padding: 15px 15px;
        background-color: var(--color-primary);
        color: var(--grey-0);
        font-weight: bolder;


    }

    button:disabled{
        opacity: 0.5;
    }

    input{
        border: 1px solid transparent;
        border-radius: 20px;
        padding: 15px 15px;
        background-color: var(--grey-3);
    }

    input:focus{
        outline: none;
        border: 1px solid var(--color-primary);;
    }

    /* @media(min-width:500px){
        .App{
            &::after{
            content: '';
            background-image: url("");
        }

        }
    }
     */


`