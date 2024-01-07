import * as urls from "../utils/urls";
import { post, put, get } from "./httpMethods";

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
