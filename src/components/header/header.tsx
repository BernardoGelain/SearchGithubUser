import { useContext } from "react";
import { ThemeContext } from "../../App";

import Sun from "/assets/sun.png";
import Moon from "/assets/moon.png";

import { ButtonDarkLight, HeaderContainer } from "./styles";

export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);

  function handleToogleTheme() {
    toogleTheme();
  }

  return (
    <HeaderContainer>
      <ButtonDarkLight onClick={handleToogleTheme}>
        {theme === "light" ? <img src={Sun} /> : <img src={Moon} />}
      </ButtonDarkLight>
    </HeaderContainer>
  );
}
