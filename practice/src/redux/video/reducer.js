import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
	data: [],
	error: "",
	isLoading : false 
};

const { Types, Creators } = createActions({
	getVideos: null,
	getVideosSuccess: ["data"],
	getVideosFailure: ["error"],
});

export const videosActions = {
	Types,
	Creators,
};

const getVideos = (state) => {
	return {
		...state,
		isLoading:true,
		error: "",
	};
};

const getVideosSuccess = (state, response) => {
	return {
		...state,
		data: response.data.videos,
		isLoading:false,
	};
};

const getVideosFailure = (state, error) => {
	return {
		...state,
		isLoading:false,
		error,
	};
};

export const videosReducer = createReducer(INITIAL_STATE, {
	[Types.GET_VIDEOS]: getVideos,
	[Types.GET_VIDEOS_SUCCESS]: getVideosSuccess,
	[Types.GET_VIDEOS_FAILURE]: getVideosFailure,
});
