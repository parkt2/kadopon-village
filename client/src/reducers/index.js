import { combineReducers } from "redux";

import user from "./user";

const appReducer = combineReducers({
	user
});

const rootReducer = (state, action) => {
	// if action type = logging out, do logout stuff and clear state
	return appReducer(state, action);
};

export default rootReducer;
