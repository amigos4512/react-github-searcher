import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserAction } from '../../actions/appActions';
import { RequestState } from '../../types/RequestStates';
import { AppState } from '../../types/state/appState';
import { SearchRepos } from './SearchRepos';
import './RepoStyles.scss';

export const SearchUserRepoPage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: AppState) => state.currentUser);
  const userRequestState = useSelector(
    (state: AppState) => state.userRequestState
  );

  useEffect(() => {
    if (username) {
      dispatch(fetchUserAction.request(username));
    }
  }, [username, dispatch]);

  if (userRequestState !== RequestState.success) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h3>Search repos</h3>
      <div className='container_avatar'>
        <img src={currentUser.avatar_url} alt={currentUser.login} />

        <ul className='container_list'>
          <li>Username:&nbsp;{currentUser.login}</li>
          <li> Email:&nbsp;{currentUser.email || '-'}</li>
          <li>Location:&nbsp;{currentUser.location}</li>
          <li>Join at:&nbsp;{String(currentUser.created_at)}</li>
          <li>Followers:&nbsp;{currentUser.followers}</li>
          <li>Following:&nbsp;{currentUser.following}</li>
        </ul>
      </div>
      <p>{currentUser.bio}</p>
      {currentUser.repos_url && (
        <SearchRepos repos_url={currentUser.repos_url} />
      )}
    </div>
  );
};
