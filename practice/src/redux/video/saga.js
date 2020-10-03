import { put, call } from "redux-saga/effects";
import { videosActions } from "./reducer";
import { getVideosAsync } from "../apisauce";

export function* getVideos() {
	try {
		let response;

		response = yield call(getVideosAsync);
		
		if (!response.error) {
			yield put(videosActions.Creators.getVideosSuccess(response.data));
		} else {
			yield put(videosActions.Creators.getVideosFailure(response.error));
		}
	} catch (error) {
		yield put(videosActions.Creators.getVideosFailure(error));
	}
}
