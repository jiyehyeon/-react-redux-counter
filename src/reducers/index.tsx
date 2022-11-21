import React from "react";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "PLUS":
      return { ...state, value: state.value + 1 };
    case "MINUS":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
