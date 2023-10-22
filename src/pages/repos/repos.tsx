import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GitHubRepo } from "../../models/GitHubRepo";

export default function Repos() {
  const params = useParams();
  const user = params.user;

  const [data, setData] = useState<GitHubRepo | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [order, setOrder] = useState("");

  async function returnRepos() {
    const url = `https://api.github.com/users/${user}/repos`;
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
  }
  useEffect(() => {
    returnRepos();
  }, []);
  return <></>;
}
