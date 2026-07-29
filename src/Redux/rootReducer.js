import { combineReducers } from "redux";
import getAllEmployeeReducer from "./reducer/getAllEmployeeReducer";
import createApplyJobReducer from "./reducer/createApplyJobReducer";

const rootReducer = combineReducers({
  employeeData: getAllEmployeeReducer,
  createApplyJob: createApplyJobReducer,
});

export default rootReducer;
