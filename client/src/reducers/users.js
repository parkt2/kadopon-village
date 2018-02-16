import { combineReducers } from "redux";

import {
	USERS_AUTHENTICATE,
	USERS_LOGGING_IN,
	USERS_LOGOUT,
	USERS_REGISTERING,
} from "../actions/users";

const currentUser = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
	case USERS_AUTHENTICATE:
		return Object.assign({}, state, {
			jwtToken: action.jwtToken,
		});
	case USERS_LOGGING_IN:
		return Object.assign({}, state, {
			isFetching: action.isFetching,
		});
	case USERS_LOGOUT:
		return Object.assign({
			isFetching: false,
		});
	case USERS_REGISTERING:
		return Object.assign({}, state, {
			isFetching: action.isFetching,
		});
	default:
		return state;
	}
};

const users = combineReducers({
	currentUser,
});

export default users;
