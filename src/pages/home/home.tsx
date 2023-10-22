import { Header } from "../../components/header/header";
import {
  Container,
  GitHubLogo,
  Search,
  SearchButton,
  SearchContainer,
} from "./styles";
import { ChangeEvent, useContext, useState } from "react";
import { ThemeContext } from "../../App";
import Logo from "/assets/github-white.svg";
import LogoDark from "/assets/github-black.svg";
import Lupa from "/assets/lupa-white.png";
import LupaDark from "/assets/lupa-black.png";

import { GitHubUser } from "../../models/GitHubUser";
import Loader from "../../components/loader/loader";
import axios from "axios";
import { CardUser } from "../../components/cardUser/cardUser";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<GitHubUser | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const returnUser = async () => {
    const url = `https://api.github.com/users/${search}`;
    setIsFetching(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        if (error) {
          setError(null);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <>
      {isFetching && <Loader />}
      <Header />
      <Container>
        {theme === "light" ? (
          <GitHubLogo src={LogoDark} />
        ) : (
          <GitHubLogo src={Logo} />
        )}
        <SearchContainer>
          <Search
            placeholder="Busque por um usuário do GitHub"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(event) => {
              event.code === "Enter" && returnUser();
            }}
          />
          <SearchButton onClick={returnUser}>
            {theme === "light" ? (
              <GitHubLogo src={Lupa} /* onClick={returnUser}  */ />
            ) : (
              <GitHubLogo src={LupaDark} /* onClick={returnUser}  */ />
            )}
          </SearchButton>
        </SearchContainer>
        {error && <span>{error.message}</span>}
        {data && <CardUser user={data} />}
      </Container>
    </>
  );
}
