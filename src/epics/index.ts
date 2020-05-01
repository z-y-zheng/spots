import { of } from "rxjs";
import axios from "axios";
import { combineEpics } from "redux-observable";

import {
  USER,
  fetchUserFailure,
  fetchUserSuccess,
} from "../actions/user-actions";

const url = "localhost:4000/users";

function fetchUserEpic(action$: any) {
  // action$ is a stream of actions
  // action$.ofType is the outer Observable
  return (
    action$
      .ofType(USER.FETCH_USER)
      .switchMap(() => {
        return axios.get(url).then((res) => console.log(res));
        // at the end our inner Observable has a stream of an array of user objects which will be merged into the outer Observable
      })
      .map((user: any) => fetchUserSuccess(user)) // map the resulting array to an action of type FETCH_USER_SUCCESS
      // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
      // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
      .catch((error: Error) => of(fetchUserFailure(error.message)))
  );
}

export const rootEpic = combineEpics(fetchUserEpic);
