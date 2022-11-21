import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { createStore } from "redux";
import counterReducer from "./reducers";

const store = createStore(counterReducer);
test("renders learn react link", () => {
  render(<App store={store} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
