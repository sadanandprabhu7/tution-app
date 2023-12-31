const reducer = (state = null, action) => {
  if (action.type === "login") {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default reducer;
