export interface Repos {
  id: number;
  html_url: string;
  name: string;
  forks: number;
  stargazers_count: number;
}

export interface ResponseRepos {
  data: Repos[];
}
