// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import FiltersSlice from "../components/Filters/FiltersSlice";
import TodosSlice from "../components/TodoList/TodosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: FiltersSlice.reducer,
    todoList: TodosSlice.reducer,
  },
});

export default store;
