import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./src/store/reducers/products";
import ShopNavigator from "./src/navigation/ShopNavigator";

const rootReducer = combineReducers({
  product: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}