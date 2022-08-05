interface ReposItemProps {
  html_url: string;
  name: string;
  forks: number;
  stars: number;
}

export const ReposItem = ({ name, forks, stars, html_url }: ReposItemProps) => (
  // eslint-disable-next-line
  <a href={html_url} target='_blank'>
    <div className='container_repos_item'>
      <h3>{name}</h3>
      <div>
        <h3>forks: {forks}</h3>
        <h3>stars: {stars}</h3>
      </div>
    </div>
  </a>
);
