const url = process.env.REACT_APP_API_BASE_PATH;

// auth routes

export const USERS_LOGIN = `${url}/users/login`;
export const USERS_SIGNUP = `${url}/users/add`;
export const USERS_VERIFY = `${url}/users/add/verify`;

export const USERS_UPDATE = `${url}/users/update`;

export const USERS_STATUS = `${url}/teachers/status`;
export const USERS_PROFILE = `${url}/users/profile`;
export const USERS_ENTITIES = `${url}/users/entities`;
