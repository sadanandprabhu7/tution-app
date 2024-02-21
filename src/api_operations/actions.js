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

export const updateUsers =
  (payload, successCallback, failureCallback) => async () => {
    try {
      const data = await post(urls.USERS_UPDATE, payload);

      if (typeof successCallback === "function") {
        successCallback(data);
      }
    } catch (err) {
      if (typeof failureCallback === "function") {
        failureCallback(err);
      }
    }
  };
