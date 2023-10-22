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

li a {
    border-radius: 7px;
    padding: 0.5rem 0.5rem;
  
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background: ${(props) => props.theme.colors.gradient} ;
    border-color: transparent;
    color: ${(props) => props.theme.colors.tableThead};
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }

.pagination{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 50px;

`;
