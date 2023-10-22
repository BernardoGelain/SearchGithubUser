import { useNavigate } from "react-router-dom";
import { GitHubUser } from "../../models/GitHubUser";
import {
  Avatar,
  BoldSpan,
  ButtonRepos,
  Container,
  ContainerFollowers,
  ContainerInfo,
  ContainerProfile,
  ContainerUser,
  MinorSpan,
} from "./styles";

type Props = {
  user: GitHubUser;
};
export function CardUser({ user }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <ContainerUser>
          <Avatar src={user.avatar_url} />
          <ContainerInfo>
            <ContainerProfile>
              <div>
                <BoldSpan>{user.login}</BoldSpan>
                <MinorSpan>{user.name}</MinorSpan>
                <MinorSpan>{user.email}</MinorSpan>
                <MinorSpan>{user.bio}</MinorSpan>
              </div>
              <div>
                <ButtonRepos
                  onClick={() =>
                    navigate(`/repos/${user.login}/${user.public_repos}`)
                  }
                >
                  See all repos
                </ButtonRepos>
              </div>
            </ContainerProfile>
            <ContainerFollowers>
              <div>
                <BoldSpan>Followers:</BoldSpan>
                <BoldSpan>{user.followers}</BoldSpan>
              </div>
              <div>
                <BoldSpan>Following:</BoldSpan>
                <BoldSpan>{user.following}</BoldSpan>
              </div>
              <div>
                <BoldSpan>Repos:</BoldSpan>
                <BoldSpan>{user.public_repos}</BoldSpan>
              </div>
            </ContainerFollowers>
          </ContainerInfo>
        </ContainerUser>
      </Container>
    </>
  );
}
