import { GitHubUser } from "../../models/GitHubUser";
import {
  Avatar,
  BoldSpan,
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
  return (
    <>
      <Container>
        <ContainerUser>
          <Avatar src={user.avatar_url} />
          <ContainerInfo>
            <ContainerProfile>
              <BoldSpan>{user.login}</BoldSpan>
              <MinorSpan>{user.name}</MinorSpan>
              <MinorSpan>{user.email}</MinorSpan>
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
