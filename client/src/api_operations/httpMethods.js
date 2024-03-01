import qs from "qs";

function checkHTTPStatus(status) {
  if (status === 401) {
    localStorage.setItem("sessionExpired", true);
  }
}

const Timeout = (time) => {
  let controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};

export const get = async (url, body) => {
  let data;
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth) {
      customHeaders.authorization = auth;
    }
    let res = null;
    if (body) {
      res = await fetch(`${url}?${qs.stringify(body)}`, {
        method: "get",
        headers: customHeaders,
      });
    } else {
      res = await fetch(url, {
        signal: Timeout(30).signal,
        method: "get",
        headers: customHeaders,
      });
    }
    data = await res.json();
    checkHTTPStatus(res.status);
    // if (res.status >= 200 && res.status <= 200) {
    //   return data;
    // }
    // const error = new Error(res.errors);
    // error.response = res;
    // throw error;
    return data;
  } catch (e) {
    if (e) {
      let error;
      if (e.name === "AbortError") {
        error = "Connection request timeout. Please try again!";
      } else {
        error = data;
      }
      throw error;
    }
  }
};

export const post = async (url, body, auth) => {
  let data;
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    customHeaders.authorization = auth;

    const res = await fetch(url, {
      signal: Timeout(30).signal,
      method: "POST",
      headers: customHeaders,
      body: JSON.stringify(body),
    });
    data = await res.json();
    checkHTTPStatus(res.status);

    if (data.status) {
      return data;
    }
    if (!data.status) {
      let error = new Error(data.message);
      error = data;
      throw error;
    }
  } catch (e) {
    if (e) {
      let error;
      if (e.name === "AbortError") {
        error = "Connection request timeout. Please try again!";
      } else {
        error = data;
      }
      throw error;
    }
  }
};
// export const post = async (url, body, auth) => {
//   let data;
//   try {
//     const customHeaders = {
//       "Content-Type": "application/json",
//     };
//     const auth = localStorage.getItem("token");
//     customHeaders.authorization = auth;

//     const res = await fetch(url, {
//       method: "POST",
//       headers: customHeaders,
//       body: JSON.stringify(body),
//     });
//     data = await res.json();
//     checkHTTPStatus(res.status);
//     if (data.status) {
//       return data;
//     }
//     if (!data.status) {
//       let error = new Error(data.message);
//       error = data;
//       throw error;
//     }
//   } catch (e) {
//     if (e) {
//       throw e;
//     }
//   }
// };
export const put = async (url, body, formData = false) => {
  let data;
  const bodyValue = body;
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth) {
      customHeaders.authorization = auth;
    }
    let res = null;
    if (formData) {
      res = await fetch(url, {
        method: "PUT",
        headers: { authorization: auth },
        Accept: "application/json",
        body: bodyValue,
      });
    }
    if (!formData) {
      res = await fetch(url, {
        method: "PUT",
        headers: customHeaders,
        body: JSON.stringify(bodyValue),
      });
    }
    data = await res.json();
    checkHTTPStatus(res.status);
    if (data.status) {
      return data;
    }
    if (!data.status) {
      let error = new Error(data.message);
      error = data;
      throw error;
    }
  } catch (e) {
    if (e) {
      throw e;
    }
  }
};
