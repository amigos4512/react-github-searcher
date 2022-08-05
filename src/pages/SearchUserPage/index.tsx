import { useDispatch, useSelector } from 'react-redux';
import { changeSearchInput } from '../../actions/appActions';
import { AppState } from '../../types/state/appState';
import { UserItem } from './UserItem';
import './SearchUserStyle.scss';

export const SearchUserPage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: AppState) => state.searchInput);
  const users = useSelector((state: AppState) => state.users);

  return (
    <div className='container'>
      <h3>Search users</h3>
      <div className='container_input'>
        <input
          type='text'
          onChange={e => dispatch(changeSearchInput(e.target.value))}
          value={value}
          placeholder='Search for Github username...'
        />
      </div>

      {users.map(user => (
        <UserItem
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          repos_url={user.repos_url}
        />
      ))}
    </div>
  );
};
