const url = process.env.REACT_APP_API_BASE_PATH;

// auth routes
export const STUDENT_LOGIN = `${url}/student/login`;
export const TEACHER_LOGIN = `${url}/teacher/login`;

export const STUDENT_SIGNUP = `${url}/student/add`;
export const TEACHER_SIGNUP = `${url}/teacher/add`;
