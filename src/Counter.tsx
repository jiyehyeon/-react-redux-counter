import React from "react";
import counterReducer from "./reducers/counter";

type counterProps = {
  value: number;
  onPlus: () => void;
  onMinus: () => void;
};

function Counter({ value, onPlus, onMinus }: counterProps) {
  return (
    <div>
      Value: {value}
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
}

export default Counter;
