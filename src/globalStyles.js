import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg-color: #fff;
        --text-color: #333;
        --text-color-light: #707070;
        --primary-color: #6730e3;
        --secondary-color: #202877;
        --blue-color: #007BFF;

        --gradient: linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1), rgba(150, 41, 230, 1));
        --burger-color: #888;
        --font-stack: 'Open Sans', Helvetica, sans-serif;
        --font-secondary: 'Montserrat';
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: var(--font-stack); 
        color: var(--text-color);
        background-color: var(--bg-color);
        line-height: 1.3
    }

    h1,h2,h3,h4 {
        line-height: 1;
        margin-bottom: 20px;
        font-family: var(--font-secondary);
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        overflow: hidden;
    }

    .section {
        padding: 5rem 0;
    }

    .logo {
        width: 12rem;
    }
`