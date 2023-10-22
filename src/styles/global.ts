import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.colors.secondary};
  }
}
body {
  background: ${(props) => props.theme.colors.background};
  font: 400 1rem 'Montserrat', sans-serif;
}
img {
  width: 100%;
  max-width: 100%;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
`;
