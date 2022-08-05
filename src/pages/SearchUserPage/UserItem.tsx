import { Link } from 'react-router-dom';
import { UserReposCount } from './UserReposCount';

interface UserItemProps {
  login: string;
  avatar_url: string;
  repos_url: string;
}

export const UserItem = ({ login, avatar_url, repos_url }: UserItemProps) => (
  <Link to={`/repository/${login}`}>
    <div className='user_item'>
      <img className='user_item_img' src={avatar_url} alt={login} />
      <h4>User: &nbsp;{login}</h4>
      <UserReposCount repos_url={repos_url} />
    </div>
  </Link>
);
