import { GitHubRepo } from "../models/GitHubRepo";

export default function orderReposPerStar(data: GitHubRepo[], order: string) {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (order === "asc") {
      return a.stargazers_count - b.stargazers_count;
    } else if (order === "desc") {
      return b.stargazers_count - a.stargazers_count;
    }
    // Se o parâmetro 'order' não for 'asc' ou 'desc', não ordenar
    return 0;
  });

  return sortedData;
}
