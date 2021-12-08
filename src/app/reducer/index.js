/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/

import { combineReducers } from "redux";
import PosReducer from "./pos";

export default combineReducers({
    pos: PosReducer,
});