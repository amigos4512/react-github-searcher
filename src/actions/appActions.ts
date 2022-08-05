import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';
import { SingleUser } from '../types/User';

export type TappActions = ActionType<
  typeof changeSearchInput | typeof usersFetchSuccess | typeof fetchUserAction
>;

export const changeSearchInput = createAction(
  'SET_SEARCH_INPUT',
  resolve => (searchInputValue: string) => resolve({ searchInputValue })
);

export const usersFetchSuccess = createAction(
  'USERS_FETCH_SUCCESS',
  resolve => (users: any[]) => resolve({ users })
);

export const fetchUserAction = createAsyncAction(
  'USER_FETCH_REQUEST',
  'USER_FETCH_SUCCESS',
  'USER_FETCH_FAILURE'
)<string, SingleUser, Error>();
