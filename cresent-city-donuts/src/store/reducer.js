import * as actions from "./actions";

const initialState = {
  totalDonutCounter: 0,
  placeholderCount: 0,
  individualCount: 0,
  sugarGlazed: 0,
  chocolate: 0,
  blueberry: 0,
  strawberry: 0,
  confetti: 0
};

//placeholderCount actions extablish a mirror count to totalDonutCount for purposes of indirect manipulation for placeholder and donut images
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAR_COUNTER:
      return {
        ...state,
        totalDonutCounter: 0,
        placeholderCount: 0
      };
    // case actions.PLACEDHOLDER_COUNTER:
    //   return {
    //     ...state,
    //     placeholderCount: state.placeholderCount - 1
    //   };
    case actions.INCREMENT_ONE:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 1,
        placeholderCount: state.totalDonutCounter + 1 - state.individualCount
      };
    case actions.INCREMENT_SIX:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 6,
        placeholderCount: state.totalDonutCounter + 6 - state.individualCount
      };
    case actions.INCREMENT_TWELVE:
      return {
        ...state,
        totalDonutCounter: state.totalDonutCounter + 12,
        placeholderCount: state.totalDonutCounter + 12 - state.individualCount
      };

    //individual donut actions
    //glazed
    case actions.INCREMENT_SUGAR_GLAZED:
      if (state.individualCount < state.totalDonutCounter) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: state.placeholderCount - 1
        };
      }
      if (state.individualCount >= state.totalDonutCounter) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: 0,
          totalDonutCounter: state.totalDonutCounter + 1
        };
      }
    case actions.DECREMENT_SUGAR_GLAZED:
      if (state.individualCount > 0) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.individualCount <= 0) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }
  }
  return state;
};

export default reducer;
