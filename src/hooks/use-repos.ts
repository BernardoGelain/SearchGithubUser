import axios from "axios";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { GitHubRepo } from "../models/GitHubRepo";
import orderReposPerStar from "../utils/orderReposPerStar";

type Props = {
  user: string;
};

export const useRepos = ({ user }: Props) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("created");
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState<Error | null>(null);

  const [orderStar, setOrderStar] = useState("");

  const toggleOrder = () => {
    order === "desc" ? setOrder("asc") : setOrder("desc");
  };

  const toggleOrderStar = () => {
    orderStar === "desc" ? setOrderStar("asc") : setOrderStar("desc");
  };

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;

    setPage(newPage);
  };
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  useMemo(() => {
    if (orderStar !== "") setRepos(orderReposPerStar(repos, orderStar));
  }, [orderStar, JSON.stringify(repos)]);

  const returnRepos = useCallback(() => {
    setOrderStar("");
    const url = `https://api.github.com/users/${user}/repos`;
    setIsFetching(true);
    axios
      .get(url, {
        params: {
          per_page: 20,
          page,
          sort: sortBy,
          direction: order,
        },
      })
      .then((response) => {
        setRepos(response.data);
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
  }, [user, page, sortBy, order, error]);

  useEffect(() => {
    returnRepos();
  }, [returnRepos]);

  return {
    repos,
    isFetching,
    error,
    page,
    sortBy,
    order,
    orderStar,
    toggleOrder,
    toggleOrderStar,
    handlePageClick,
    handleChangeSort,
  };
};
