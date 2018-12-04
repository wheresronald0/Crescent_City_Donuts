import * as actions from "../actions";

const initialState = {
  totalDonutCounter: 0
};

const totalCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAR_COUNTER:
      return {
        totalDonutCounter: 0
      };
    case actions.INCREMENT_ONE:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 1
      };
    case actions.INCREMENT_SIX:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 6
      };
    case actions.INCREMENT_TWELVE:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 12
      };
  }
  return state;
};

export default totalCountReducer;
