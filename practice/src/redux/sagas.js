import { all, takeEvery } from "redux-saga/effects";
import { videosActions } from "./video/reducer";
import { getVideos } from "./video/saga";
// import { colorActions } from "./color/reducer";
// import { getColor } from "./color/saga";


export default function* rootSaga() {
	yield all([yield takeEvery(videosActions.Types.GET_VIDEOS,getVideos)]);
	//yield all([yield takeEvery(colorActions.Types.GET_COLOR,getColor)]);
}