export const logIn = (token) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: token,
    });
  };
};
export const logOut = (token) => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      payload: token,
    });
  };
};
