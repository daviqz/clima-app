import { createStore } from "redux";
import { ACTION_TYPES } from "./Actions";

const initialState = {
  loggedUser: null,
};

export default createStore((state: object = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
    case ACTION_TYPES.RESTORE_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload.loggedUser,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        loggedUser: null,
      };
    default:
      return state;
  }
});
