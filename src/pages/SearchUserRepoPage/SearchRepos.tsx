import axios from 'axios';
import { useEffect, useState } from 'react';
import { authParams } from '../../services/github-api';
import { Repos, ResponseRepos } from '../../types/Repos';
import { ReposItem } from './ReposItem';

export const SearchRepos = ({ repos_url }: { repos_url: string }) => {
  const [value, setValue] = useState('');
  const [reposes, setReposes] = useState<Repos[]>([]);
  const filteredRepos = reposes.filter(repos =>
    repos.name.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(repos_url, authParams)
      .then((reponse: ResponseRepos) => setReposes(reponse.data));
  }, [repos_url]);

  return (
    <div>
      <div className='container_input'>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Search for repos name...'
        />
      </div>
      {filteredRepos.map(repos => (
        <ReposItem
          key={repos.id}
          html_url={repos.html_url}
          name={repos.name}
          forks={repos.forks}
          stars={repos.stargazers_count}
        />
      ))}
    </div>
  );
};
