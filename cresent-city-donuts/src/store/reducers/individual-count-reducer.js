import * as actions from "../actions";

const initialState = {
  sugarGlazed: 0,
  chocolate: 0,
  blueberry: 0,
  strawberry: 0,
  confetti: 0
};

const individualCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_SUGAR_GLAZED:
      return {
        ...state,
        sugarGlazed: state.sugarGlazed + 1
      };
    case actions.DECREMENT_SUGAR_GLAZED:
      return {
        ...state,
        sugarGlazed: state.sugarGlazed - 1
      };
  }
  return state;
};

export default individualCountReducer;
