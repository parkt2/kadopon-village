import { combineReducers } from "redux";

import user from "./user";

const appReducer = combineReducers({
	user,
});

/* eslint-disable no-console */
const rootReducer = (state, action) => {
	// if action type = logging out, do logout stuff and clear state
	console.log("clear");
	return appReducer(state, action);
};

export default rootReducer;
