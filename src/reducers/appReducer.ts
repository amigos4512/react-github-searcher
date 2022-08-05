import { getType } from 'typesafe-actions';
import {
  changeSearchInput,
  fetchUserAction,
  TappActions,
  usersFetchSuccess,
} from '../actions/appActions';
import { RequestState } from '../types/RequestStates';
import { AppState } from '../types/state/appState';

const initialState: AppState = {
  searchInput: '',
  users: [],
  currentUser: {
    id: 0,
    avatar_url: '',
    login: '',
    email: '',
    location: '',
    created_at: new Date(),
    followers: 0,
    following: 0,
    bio: '',
    repos_url: '',
  },
  userRequestState: RequestState.request,
};

export const appReducer = (
  state: AppState = initialState,
  action: TappActions
): AppState => {
  switch (action.type) {
    case getType(changeSearchInput):
      return {
        ...state,
        searchInput: action.payload.searchInputValue,
      };
    case getType(usersFetchSuccess):
      return {
        ...state,
        users: action.payload.users,
      };
    case getType(fetchUserAction.request):
      return {
        ...state,
        userRequestState: RequestState.request,
      };
    case getType(fetchUserAction.success):
      return {
        ...state,
        currentUser: action.payload,
        userRequestState: RequestState.success,
      };
    default:
      return state;
  }
};
