import { GitHubRepo } from "../../models/GitHubRepo";
import { Container, Title } from "./styles";

type Props = {
  repo: GitHubRepo;
};

export default function RepoCard({ repo }: Props) {
  return (
    <Container>
      <Title>{repo.name}</Title>
    </Container>
  );
}
