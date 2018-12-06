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
      if (state.sugarGlazed > 0) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.sugarGlazed <= 0) {
        return {
          ...state,
          sugarGlazed: state.sugarGlazed,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }

    //chocolate
    case actions.INCREMENT_CHOCOLATE:
      if (state.individualCount < state.totalDonutCounter) {
        return {
          ...state,
          chocolate: state.chocolate + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: state.placeholderCount - 1
        };
      }
      if (state.individualCount >= state.totalDonutCounter) {
        return {
          ...state,
          chocolate: state.chocolate + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: 0,
          totalDonutCounter: state.totalDonutCounter + 1
        };
      }
    case actions.DECREMENT_CHOCOLATE:
      if (state.chocolate > 0) {
        return {
          ...state,
          chocolate: state.chocolate - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.chocolate <= 0) {
        return {
          ...state,
          chocolate: state.chocolate,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }
    //chocolate
    case actions.INCREMENT_BLUEBERRY:
      if (state.individualCount < state.totalDonutCounter) {
        return {
          ...state,
          blueberry: state.blueberry + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: state.placeholderCount - 1
        };
      }
      if (state.individualCount >= state.totalDonutCounter) {
        return {
          ...state,
          blueberry: state.blueberry + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: 0,
          totalDonutCounter: state.totalDonutCounter + 1
        };
      }
    case actions.DECREMENT_BLUEBERRY:
      if (state.blueberry > 0) {
        return {
          ...state,
          blueberry: state.blueberry - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.blueberry <= 0) {
        return {
          ...state,
          blueberry: state.blueberry,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }

    //strawberry
    case actions.INCREMENT_STRAWBERRY:
      if (state.individualCount < state.totalDonutCounter) {
        return {
          ...state,
          strawberry: state.strawberry + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: state.placeholderCount - 1
        };
      }
      if (state.individualCount >= state.totalDonutCounter) {
        return {
          ...state,
          strawberry: state.strawberry + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: 0,
          totalDonutCounter: state.totalDonutCounter + 1
        };
      }
    case actions.DECREMENT_STRAWBERRY:
      if (state.strawberry > 0) {
        return {
          ...state,
          strawberry: state.strawberry - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.strawberry <= 0) {
        return {
          ...state,
          strawberry: state.strawberry,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }

    //confetti
    case actions.INCREMENT_CONFETTI:
      if (state.individualCount < state.totalDonutCounter) {
        return {
          ...state,
          confetti: state.confetti + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: state.placeholderCount - 1
        };
      }
      if (state.individualCount >= state.totalDonutCounter) {
        return {
          ...state,
          confetti: state.confetti + 1,
          individualCount: state.individualCount + 1,
          placeholderCount: 0,
          totalDonutCounter: state.totalDonutCounter + 1
        };
      }
    case actions.DECREMENT_CONFETTI:
      if (state.confetti > 0) {
        return {
          ...state,
          confetti: state.confetti - 1,
          individualCount: state.individualCount - 1,
          placeholderCount: state.placeholderCount + 1
        };
      }
      //ensures count doesn't go nagative
      if (state.confetti <= 0) {
        return {
          ...state,
          confetti: state.confetti,
          individualCount: state.individualCount,
          placeholderCount: state.placeholderCount
        };
      }
  }
  return state;
};

export default reducer;
