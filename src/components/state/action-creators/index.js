export const logIn = (token) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: token,
    });
  };
};

export const status = (stateValue) => {
  return (dispatch) => {
    dispatch({
      type: "status",
      payload: stateValue,
    });
  };
};
