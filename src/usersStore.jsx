import { applyMiddleware, createStore } from "redux";
import usersReducer from "./services/reducers/usersReducer";
import thunk from "redux-thunk";

const usersStore = createStore(usersReducer, applyMiddleware(thunk));

export default usersStore;
