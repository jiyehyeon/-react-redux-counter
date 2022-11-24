import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import reportWebVitals from "./reportWebVitals";

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
