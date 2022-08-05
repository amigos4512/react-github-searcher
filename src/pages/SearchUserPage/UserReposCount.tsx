import axios from 'axios';
import { useEffect, useState } from 'react';
import { authParams } from '../../services/github-api';
import { ResponseRepos } from '../../types/Repos';

export const UserReposCount = ({ repos_url }: { repos_url: string }) => {
  const [reposCount, setReposCount] = useState(0);

  useEffect(() => {
    axios
      .get(repos_url, authParams)
      .then((reponse: ResponseRepos) => setReposCount(reponse.data.length));
  }, [repos_url]);

  return <div>Repos count:&nbsp;{reposCount}</div>;
};
