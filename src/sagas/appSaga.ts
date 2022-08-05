import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import {
  changeSearchInput,
  fetchUserAction,
  usersFetchSuccess,
} from '../actions/appActions';
import { fetchUsersRequest, fetchUserRequest } from '../services/github-api';
import { SingleUserResponse, UsersResponse } from '../types/User';

function* fetchUsers(action: ActionType<typeof changeSearchInput>) {
  try {
    if (!action.payload.searchInputValue) {
      yield put(usersFetchSuccess([]));
    }
    yield delay(450);
    const response: UsersResponse = yield call(
      fetchUsersRequest,
      action.payload.searchInputValue
    );
    yield put(usersFetchSuccess(response.data.items));
  } catch (e) {
    console.warn('Request failed');
  }
}

function* fetchUserSaga(action: ActionType<typeof fetchUserAction.request>) {
  try {
    const response: SingleUserResponse = yield call(
      fetchUserRequest,
      action.payload
    );
    yield put(fetchUserAction.success(response.data));
  } catch (e) {
    yield put(fetchUserAction.failure(e as Error));
    console.warn('Request failed');
  }
}

function* appSaga() {
  yield takeLatest(getType(changeSearchInput), fetchUsers);
  yield takeEvery(getType(fetchUserAction.request), fetchUserSaga);
}

export default appSaga;
