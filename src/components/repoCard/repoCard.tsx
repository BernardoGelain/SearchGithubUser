import { useContext } from "react";
import { GitHubRepo } from "../../models/GitHubRepo";
import { Container, ContainerInfo, Icon, Text, Title } from "./styles";
import { ThemeContext } from "../../App";
import ForkBlack from "/assets/fork-black.png";
import ForkWhite from "/assets/fork-white.png";

type Props = {
  repo: GitHubRepo;
};

export default function RepoCard({ repo }: Props) {
  const { theme } = useContext(ThemeContext);
  const forkIcon = theme === "light" ? ForkBlack : ForkWhite;
  return (
    <Container>
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
    </Container>
  );
}
