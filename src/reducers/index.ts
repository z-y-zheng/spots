import { USER, UserActionTypes } from "../actions/user-actions";

const initialState = {
  user: [],
  isLoading: false,
  error: "",
};

const { FETCH_USER, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } = USER;

export default function rootReducer(
  state = initialState,
  action: UserActionTypes
) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        user: [...action.payload],
        isLoading: false,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        user: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
