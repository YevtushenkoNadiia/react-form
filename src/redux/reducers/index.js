import { combineReducers } from "redux";
import testReducer from "./test.reducer";
import usersReducer from "./users.reducer";

export default combineReducers({
  test: testReducer,
  users: usersReducer,
});
