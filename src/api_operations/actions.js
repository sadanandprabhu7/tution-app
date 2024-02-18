import * as urls from "../utils/urls";
import { post } from "./httpMethods";

// GLOBAL CALLS

export const teacherSignUpCall =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.TEACHER_SIGNUP, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

export const teacherVerifyOtp =
  (payload, successCallback, failureCallback) => async () => {
    try {
      console.log("in api++++++++++++++++++");
      const data = await post(urls.TEACHER_VERIFY, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
export const studentVerifyOtp =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.STUDENT_VERIFY, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
export const studentSignUpCall =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.STUDENT_SIGNUP, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };

export const updateTeachersAddress =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.TEACHER_ADDRESS, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
export const updateTeachersClass =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.TEACHER_CLASSES, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
export const updateTeachersSubject =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.TEACHER_SUBJECTS, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
export const updateTeachersTime =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.TEACHER_TIMES, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
