export enum USER {
  FETCH_USER = "FETCH_USERS",
  FETCH_USER_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USERS_FAILURE",
}

export const fetchUsers = () => ({
  type: USER.FETCH_USER,
});

export const fetchUserSuccess = (user = {}) => ({
  type: USER.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (message = "") => ({
  type: USER.FETCH_USER_FAILURE,
  payload: message,
});

export interface FetchUserAction {
  type: USER.FETCH_USER;
}

interface FetchUserSuccessAction {
  type: USER.FETCH_USER_SUCCESS;
  payload: [];
}

interface FetchUserFailureAction {
  type: USER.FETCH_USER_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserFailureAction;
