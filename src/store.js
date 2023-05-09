import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bolsilloPersist from "../src/redux/persistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//hola
const persistconfig = {
  key: "root",
  storage,
  whitelist: ["bolsilloPersist"],
};
const rootreducer = combineReducers({
  bolsilloPersist: bolsilloPersist,
});
const persistreducer = persistReducer(persistconfig, rootreducer);
const store = configureStore({
  reducer: persistreducer,
  middleware: [thunk],
});

export default store;
