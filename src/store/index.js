import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducers";
import ProductReducer from "./reducers/products.reducers";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});

export default createStore(RootReducer);
