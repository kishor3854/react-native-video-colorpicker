import { combineReducers } from "redux";
import {videosReducer} from "./video/reducer";

const reducers = combineReducers({
	videos: videosReducer
});

export default reducers;
