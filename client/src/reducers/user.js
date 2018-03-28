import { combineReducers } from "redux";

import {
	USER_AUTHENTICATE,
	USER_LOGGING_IN,
	USER_LOGOUT,
	USER_REGISTERING,
} from "../actions/user";

const currentUser = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
	case USER_AUTHENTICATE:
		return Object.assign({}, state, {
			jwtToken: action.jwtToken,
		});
	case USER_LOGGING_IN:
		return Object.assign({}, state, {
			isFetching: action.isFetching,
		});
	case USER_LOGOUT:
		return Object.assign({
			isFetching: false,
		});
	case USER_REGISTERING:
		return Object.assign({}, state, {
			isFetching: action.isFetching,
		});
	default:
		return state;
	}
};

const user = combineReducers({
	currentUser,
});

export default user;
