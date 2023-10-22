import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Container, GitHubLogo, Loading } from "./styles";

export default function Loader() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Container>
        {theme === "light" ? (
          <>
            <Loading src="/assets/loader.svg" />
            <GitHubLogo src="/assets/github-black.svg" />
          </>
        ) : (
          <>
            <Loading src="/assets/loader-white.svg" />
            <GitHubLogo src="/assets/github-white.svg" />
          </>
        )}
      </Container>
    </>
  );
}
