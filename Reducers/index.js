import {combineReducers} from "redux";
import taskListReducer from "./taskListReducer";
import screenReducer from "./screenReducer"
const rootReducer = combineReducers({
    taskListReducer,
    screenReducer,
})
export default rootReducer
