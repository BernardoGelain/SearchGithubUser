import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GitHubRepo } from "../../models/GitHubRepo";
import Loader from "../../components/loader/loader";
import { Header } from "../../components/header/header";
import {
  ButtonClone,
  ButtonContainer,
  CardRepo,
  Container,
  General,
  InfoRepo,
  InfoUser,
  Language,
  Title,
} from "./styles";
import { Avatar, BoldSpan } from "../../components/cardUser/styles";
import AppLink from "../../components/appLink/applink";
import ForkBlack from "/assets/fork-black.png";
import ForkWhite from "/assets/fork-white.png";
import EyeBlack from "/assets/eye-black.png";
import EyeWhite from "/assets/eye-white.png";
import { Icon } from "../../components/repoCard/styles";

export default function RepositoryPage() {
  const { theme } = useContext(ThemeContext);

  const forkIcon = theme === "light" ? ForkBlack : ForkWhite;
  const eyeIcon = theme === "light" ? EyeBlack : EyeWhite;

  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const params = useParams();
  const user = params.user;
  const repoName = params.repoName;
  const cloneUrl = repo?.clone_url ? repo?.clone_url : "";
  const reposCount = params.reposCount ? params.reposCount : 20;

  async function getRepository() {
    const url = `https://api.github.com/repos/${user}/${repoName}`;
    setIsFetching(true);
    axios
      .get(url)
      .then((response) => {
        setRepo(response.data);
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
  }
  useEffect(() => {
    getRepository();
  }, []);

  return (
    <>
      {isFetching && <Loader />}
      <Header />
      <Container>
        <CardRepo>
          <div>
            <InfoUser>
              <Avatar src={repo?.owner.avatar_url} />
              <BoldSpan>{repo?.owner.login}</BoldSpan>
            </InfoUser>
          </div>
          <General>
            <InfoRepo>
              <Title>{repo?.name}</Title>
              <BoldSpan>{repo?.description}</BoldSpan>
              <Language>{repo?.language}</Language>
              <div>
                <Icon src="/assets/star.png" />
                <BoldSpan>{repo?.stargazers_count}</BoldSpan>
              </div>
              <div>
                <Icon src={forkIcon} />
                <BoldSpan>{repo?.forks}</BoldSpan>
              </div>
              <div>
                <Icon src={eyeIcon} />
                <BoldSpan>{repo?.watchers}</BoldSpan>
              </div>
              <div>
                <AppLink href={repo?.svn_url} target="_blank">
                  github.com/thisRepo
                </AppLink>
              </div>
            </InfoRepo>
            <ButtonContainer>
              <ButtonClone
                onClick={async () =>
                  await navigator.clipboard.writeText(cloneUrl)
                }
              >
                Clone URL
              </ButtonClone>
            </ButtonContainer>
          </General>
        </CardRepo>
        <AppLink href={`/repos/${user}/${reposCount}`}>Back to Repos</AppLink>
      </Container>
    </>
  );
}
