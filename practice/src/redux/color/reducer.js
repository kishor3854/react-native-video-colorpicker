import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
	data: [],
	error: "",
	isLoading : false,
};

const { Types, Creators } = createActions({
	getColor: null,
	getColorSuccess: ["data"],
	getColorFailure: ["error"],
});

export const colorActions = {
	Types,
	Creators,
};

const getColor = (state) => {
	return {
		...state,
		isLoading:true,
		error: "",
	};
};

const getColorSuccess = (state, response) => {
    console.log("res-->",response)
    
	return {
		...state,
		data: response.data,
		isLoading:false
	};
};

const getColorFailure = (state, error) => {
	return {
		...state,
		error,
		isLoading:false
	};
};

export const colorReducer = createReducer(INITIAL_STATE, {
	[Types.GET_COLOR]: getColor,
	[Types.GET_COLOR_SUCCESS]: getColorSuccess,
	[Types.GET_COLOR_FAILURE]: getColorFailure,
});
