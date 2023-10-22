import { createContext, useState } from "react";
import Routes from "./routes/routes";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

type Themes = "light" | "dark" | undefined;

interface ThemeContextType {
  theme: Themes;
  toogleTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextType);
function App() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem("GELAIN-THEME:theme-1.0.0");
    console.log(storageValue);
    if (storageValue == "light") {
      return "light";
    } else if (storageValue == "dark") {
      return "dark";
    }
  });

  function toogleTheme() {
    const themeNow = theme === "light" ? "dark" : "light";

    setTheme(themeNow);

    localStorage.setItem("GELAIN-THEME:theme-1.0.0", JSON.stringify(themeNow));
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
          <GlobalStyle />
          <Routes />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
