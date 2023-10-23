import { useContext } from "react";
import { useParams } from "react-router-dom";
import Paginator from "../../components/paginator/paginator";
import { Header } from "../../components/header/header";
import RepoCard from "../../components/repoCard/repoCard";
import {
  Arrow,
  ArrowStar,
  Container,
  ContainerOrder,
  Label,
  ReposContainer,
  Select,
  Star,
  StarFilled,
} from "./styles";
import Loader from "../../components/loader/loader";
import { ThemeContext } from "../../App";
import ArrowUpWhite from "/assets/arrowUp-white.png";
import ArrowUpBlack from "/assets/arrowUp-black.png";
import ArrowDownWhite from "/assets/arrowDown-white.png";
import ArrowDownBlack from "/assets/arrowDown-black.png";
import { useRepos } from "../../hooks/use-repos";

export default function Repos() {
  const { theme } = useContext(ThemeContext);
  const params = useParams();

  const user = params.user;
  const reposCount = params.reposCount ? params.reposCount : 20;

  const {
    handleChangeSort,
    handlePageClick,
    isFetching,
    order,
    orderStar,
    repos,
    toggleOrder,
    toggleOrderStar,
  } = useRepos({
    user: String(user),
  });

  return (
    <>
      {isFetching && <Loader />}
      <Header />
      <Container>
        <ContainerOrder>
          <div>
            <Label>
              Sort By:
              <Select defaultValue={"created"} onChange={handleChangeSort}>
                <option value="created" key={1}>
                  Created
                </option>
                <option value="updated" key={2}>
                  Updated
                </option>
                <option value="pushed" key={3}>
                  Pushed
                </option>
                <option value="full_name" key={4}>
                  Name
                </option>
              </Select>
            </Label>
            {order === "asc" ? (
              theme === "light" ? (
                <Arrow src={ArrowUpBlack} onClick={toggleOrder} />
              ) : (
                <Arrow src={ArrowUpWhite} onClick={toggleOrder} />
              )
            ) : theme === "light" ? (
              <Arrow src={ArrowDownBlack} onClick={toggleOrder} />
            ) : (
              <Arrow src={ArrowDownWhite} onClick={toggleOrder} />
            )}
          </div>
          <div>
            {orderStar === "asc" ? (
              theme === "light" ? (
                <ArrowStar src={ArrowUpBlack} onClick={toggleOrderStar} />
              ) : (
                <ArrowStar src={ArrowUpWhite} onClick={toggleOrderStar} />
              )
            ) : theme === "light" ? (
              <ArrowStar src={ArrowDownBlack} onClick={toggleOrderStar} />
            ) : (
              <ArrowStar src={ArrowDownWhite} onClick={toggleOrderStar} />
            )}
            {orderStar === "" ? (
              theme === "light" ? (
                <StarFilled src={"/assets/starFilled-black.png"} />
              ) : (
                <StarFilled src={"/assets/starFilled-white.png"} />
              )
            ) : (
              <Star src={"/assets/star.png"} />
            )}
          </div>
        </ContainerOrder>
        <ReposContainer>
          {repos?.map((repo) => {
            return (
              <RepoCard repo={repo} reposCount={+reposCount} key={repo.id} />
            );
          })}
        </ReposContainer>
        {+reposCount > 20 && (
          <Paginator
            handlePageClick={handlePageClick}
            pages={Math.ceil(+reposCount / 20)}
          />
        )}
      </Container>
    </>
  );
}
