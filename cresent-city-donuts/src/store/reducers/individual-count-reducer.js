import * as actions from "../actions";

const initialState = {
  sugarGalzed: 0,
  chocolate: 0,
  blueberry: 0,
  strawberry: 0,
  confetti: 0
};

const individualCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_DONUT:
      return {
        sugarGalzed: state.sugarGalzed + 1
      };
  }
  return state;
};

export default individualCountReducer;
