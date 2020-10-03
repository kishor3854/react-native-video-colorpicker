import { put, call } from "redux-saga/effects";
import { colorActions } from "./reducer";
import { getColorAsync } from "../apisauce";

export function* getColor() {
	try {
		let response;

		response = yield call(getColorAsync);
		
		if (!response.error) {
			yield put(colorActions.Creators.getColorSuccess(response.data));
		} else {
			yield put(colorActions.Creators.getColorFailure(response.error));
		}
	} catch (error) {
		yield put(colorActions.Creators.getColorFailure(error));
	}
}
