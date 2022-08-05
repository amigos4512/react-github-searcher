import { RequestState } from '../RequestStates';
import { SingleUser, User } from '../User';

export interface AppState {
  searchInput: string;
  users: User[];
  currentUser: SingleUser;
  userRequestState: RequestState;
}
