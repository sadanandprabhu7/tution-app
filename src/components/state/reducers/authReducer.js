const reducer = (state = null, action) => {
  if (action.type === "login") {
    state = action.payload;
    return state;
    // return state + action.payload;
  } else if (action.type === "logout") {
    state = action.payload;
    return state;
    // return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
