import {
  BACK_BUTTON_ACTION,
  RESET_DATA_ACTION,
  SUBMIT_DATA_ACTION,
} from "./constants";
import { initialState } from "./store";
import { StateDataType, actionTypes } from "./types";

export const stepperReducer = (state: StateDataType, action: actionTypes) => {
  switch (action.type) {
    case SUBMIT_DATA_ACTION: {
      return { ...state, ...action.data, activeStep: state.activeStep + 1 };
    }
    case BACK_BUTTON_ACTION: {
      return { ...state, activeStep: state.activeStep - 1 };
    }
    case RESET_DATA_ACTION: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
