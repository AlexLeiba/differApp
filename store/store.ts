import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { apiFactory } from "../api";
import reducers from "./root";

export const configureStore = () => {
  const api = apiFactory();
  const middleware = composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api }))
  );
  const store = createStore(reducers, middleware);

  return store;
};
