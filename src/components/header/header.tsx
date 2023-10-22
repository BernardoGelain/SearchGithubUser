import { useContext } from "react";
import { ThemeContext } from "../../App";

import Sun from "/assets/sun.png";
import Moon from "/assets/moon.png";

import Logo from "/assets/github-white.svg";
import LogoDark from "/assets/github-black.svg";

import { ButtonDarkLight, HeaderContainer, LogoHeader } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  function handleToogleTheme() {
    toogleTheme();
  }
  const logo = theme === "light" ? LogoDark : Logo;
  return (
    <HeaderContainer>
      <LogoHeader src={logo} onClick={() => navigate("/")} />
      <ButtonDarkLight onClick={handleToogleTheme}>
        {theme === "light" ? <img src={Sun} /> : <img src={Moon} />}
      </ButtonDarkLight>
    </HeaderContainer>
  );
}
