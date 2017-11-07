export const USERS_AUTHENTICATE = "USERS_AUTHENTICATE";
export const USERS_LOGGING_IN = "USERS_LOGGING_IN";
export const USERS_LOGOUT = "USERS_LOGOUT";
export const USERS_REGISTERING = "USERS_REGISTERING";

export function usersAuthenticate(jwtToken) {
	return {
		type: USERS_AUTHENTICATE,
		jwtToken,
	};
}

export function usersLoggingIn(isFetching = false) {
	return {
		type: USERS_LOGGING_IN,
		isFetching,
	};
}

export function usersLogout() {
	return {
		type: USERS_LOGOUT,
	};
}

export function usersRegistering(isFetching = false) {
	return {
		type: USERS_REGISTERING,
		isFetching,
	};
}
