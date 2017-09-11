export const USERS_AUTHENTICATE = "USERS_AUTHENTICATE";
export const USERS_LOGIN = "USERS_LOGIN";
export const USERS_LOGOUT = "USERS_LOGOUT";
export const USERS_REGISTER = "USERS_REGISTER";

export function authenticate(username, password) {
	return {
		type: USERS_AUTHENTICATE,
		username,
		password,
	};
}

export function login() {
	return {
		type: USERS_LOGIN,
	};
}

export function logout() {
	return {
		type: USERS_LOGOUT,
	};
}

export function register(username, email, password) {
	return {
		type: USERS_REGISTER,
		username,
		email,
		password,
	};
}
