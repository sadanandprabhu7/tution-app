const reducer = (state = localStorage.getItem("current_status"), action) => {
  if (action.type === "status") {
    state = action.payload;
    return state;
    // return state + action.payload;
  } else {
    return state;
  }
};

export default reducer;
