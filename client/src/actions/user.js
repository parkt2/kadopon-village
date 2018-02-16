export const USER_AUTHENTICATE = "USER_AUTHENTICATE";
export const USER_LOGGING_IN = "USER_LOGGING_IN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTERING = "USER_REGISTERING";

export function userAuthenticate(jwtToken) {
	return {
		type: USER_AUTHENTICATE,
		jwtToken,
	};
}

export function userLoggingIn(isFetching = false) {
	return {
		type: USER_LOGGING_IN,
		isFetching,
	};
}

export function userLogout() {
	return {
		type: USER_LOGOUT,
	};
}

export function userRegistering(isFetching = false) {
	return {
		type: USER_REGISTERING,
		isFetching,
	};
}
