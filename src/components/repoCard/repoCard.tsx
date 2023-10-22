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
};

export default function RepoCard({ repo }: Props) {
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
            <Text>{repo.forks_count}</Text>
          </div>
        </ContainerInfo>
      </GeneralContainer>
      <ButtonRepos
        onClick={() => navigate(`/${repo.owner.login}/${repo.full_name}`)}
      >
        See more
      </ButtonRepos>
    </Container>
  );
}
