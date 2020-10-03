import { combineReducers } from "redux";
import {videosReducer} from "./video/reducer";
import {colorReducer} from './color/reducer';

const reducers = combineReducers({
	videos: videosReducer,colors: colorReducer
});

export default reducers;
