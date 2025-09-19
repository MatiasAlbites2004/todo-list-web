import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    :root {
    --primary: #2563eb;
    --bg: #f8fafc;
    --text: #1e293b;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: "Inter", sans-serif;
    background: var(--bg);
    color: var(--text);
    }
`;
