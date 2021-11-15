export const ACTION_TYPES = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  RESTORE_LOGGED_USER: "RESTORE_LOGGED_USER",
};

export const signIn = (loggedUser: any) => ({
  type: ACTION_TYPES.SIGN_IN,
  payload: { loggedUser },
});

export const signOut = () => ({ type: ACTION_TYPES.SIGN_OUT });

export const restoreLoggedUser = (loggedUser: any) => ({
  type: ACTION_TYPES.RESTORE_LOGGED_USER,
  payload: { loggedUser },
});
