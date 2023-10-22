import { useContext } from "react";
import { GitHubRepo } from "../../models/GitHubRepo";
import {
  Container,
  ContainerInfo,
  GeneralContainer,
  Icon,
  Text,
  Title,
} from "./styles";
import { ThemeContext } from "../../App";
import ForkBlack from "/assets/fork-black.png";
import ForkWhite from "/assets/fork-white.png";
import { ButtonRepos } from "../cardUser/styles";
import { useNavigate } from "react-router-dom";

type Props = {
  repo: GitHubRepo;
  reposCount: number;
};

export default function RepoCard({ repo, reposCount }: Props) {
  const { theme } = useContext(ThemeContext);
  const forkIcon = theme === "light" ? ForkBlack : ForkWhite;
  const navigate = useNavigate();
  return (
    <Container>
      <GeneralContainer>
        <Title>{repo.name}</Title>
        <ContainerInfo>
          <div>
            <Icon src={forkIcon} />
            <Text>{repo.forks_count}</Text>
          </div>
          <div>
            <Icon src={"/assets/star.png"} />
            <Text>{repo.stargazers_count}</Text>
          </div>
        </ContainerInfo>
      </GeneralContainer>
      <ButtonRepos
        onClick={() => navigate(`/repository/${repo.full_name}/${reposCount}`)}
      >
        See more
      </ButtonRepos>
    </Container>
  );
}
