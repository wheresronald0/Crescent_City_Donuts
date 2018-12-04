const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "CLEAR_COUNTER") {
    return {
      counter: 0
    };
  } else if (action.type === "INCREMENT_ONE") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "INCREMENT_SIX") {
    return {
      ...state,
      counter: state.counter + 6
    };
  } else if (action.type === "INCREMENT_TWELVE") {
    return {
      ...state,
      counter: state.counter + 12
    };
  }
  return state;
};

export default reducer;
