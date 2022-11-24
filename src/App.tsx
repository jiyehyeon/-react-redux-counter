import React from "react";
import "./App.css";
import Counter from "./Counter";
import counterReducer from "./reducers/counter";

type appProps = {
  store: any;
};

function App({ store }: appProps) {
  return (
    <div className="App">
      <Counter
        value={store.getState().value}
        onPlus={() => store.dispatch({ type: "PLUS" })}
        onMinus={() => store.dispatch({ type: "MINUS" })}
      />
    </div>
  );
}

export default App;
