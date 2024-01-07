const url = process.env.REACT_APP_API_BASE_PATH;

// auth routes
export const STUDENT_LOGIN = `${url}/student/login`;
export const TEACHER_LOGIN = `${url}/teacher/login`;

export const STUDENT_SIGNUP = `${url}/student/add`;
export const TEACHER_SIGNUP = `${url}/teacher/add`;

export const TEACHER_ADDRESS = `${url}/teachers/update/address`;
export const TEACHER_TIMES = `${url}/teachers/update/time`;
export const TEACHER_CLASSES = `${url}/teachers/update/class`;
export const TEACHER_SUBJECTS = `${url}/teachers/update/subject`;

export const TEACHER_STATUS = `${url}/teachers/status`;
