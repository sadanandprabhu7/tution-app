import qs from "qs";

function checkHTTPStatus(status) {
  if (status === 401) {
    localStorage.setItem("sessionExpired", true);
  }
}

export const post = async ({
  url,
  success,
  failure,
  dispatch,
  body,
  auth,
  payment,
}) => {
  let data;
  const bodyValue = body;
  const clientId = localStorage.getItem("clientId");
  if (!auth) {
    bodyValue.ClientId = clientId;
  }
  try {
    let mainBody = "";
    if (bodyValue === "") {
      mainBody = "";
    } else {
      mainBody = JSON.stringify(bodyValue);
    }
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth && payment === undefined) {
      customHeaders.authorization = auth;
    }
    console.log(url, "url+++++++++++++++++++++++++++++++");
    const res = await fetch(url, {
      method: "POST",
      headers: customHeaders,
      body: mainBody,
    });
    data = await res.json();
    console.log(data, "data response+++++++++++++++++++++++++++++++");

    checkHTTPStatus(res.status);
    dispatch({ type: success, data });
  } catch (e) {
    if (failure) {
      dispatch({ type: failure, data });
    }
  }
};

export const postSync = async ({
  url,
  bannerNumber,
  success,
  failure,
  dispatch,
  body,
}) => {
  let data;
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth) {
      customHeaders.authorization = auth;
    }
    const res = await fetch(url, {
      method: "POST",
      headers: customHeaders,
      body: JSON.stringify(body),
    });
    data = await res.json();
    checkHTTPStatus(res.status);
    dispatch({ type: success, data, bannerNumber });
  } catch (e) {
    if (failure) {
      dispatch({ type: failure, data, bannerNumber });
    }
  }
};

export const get = async ({ url, success, failure, dispatch, body }) => {
  let data;
  let bodyValue = body;
  // console.log(body, "body++++++++++++++++++++++++");
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth) {
      customHeaders.authorization = auth;
    }
    if (body === "default" || !body) {
      bodyValue = "";
    }
    let finalurl = "";
    if (bodyValue === "") {
      finalurl = `${url}`;
    } else {
      finalurl = `${url}?${qs.stringify(bodyValue)}`;
    }
    const res = await fetch(finalurl, {
      method: "get",
      headers: customHeaders,
    });
    console.log(res, "res++++++++++++++++++++++++");

    data = await res.json();
    console.log(data, "res++++++++++++++++++++++++");

    // data.initialCall = true;
    checkHTTPStatus(res.status);
    dispatch({ type: success, data });
  } catch (e) {
    if (failure) {
      dispatch({ type: failure, data });
    }
  }
};

export const put = async ({ url, success, failure, dispatch, body }) => {
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
    const res = await fetch(url, {
      method: "PUT",
      headers: customHeaders,
      body: JSON.stringify(bodyValue),
    });
    data = await res.json();
    checkHTTPStatus(res.status);
    dispatch({ type: success, data });
  } catch (e) {
    if (failure) {
      dispatch({ type: failure, data });
    }
  }
};

export const del = async ({ url, success, failure, dispatch, body }) => {
  let data;
  try {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const auth = localStorage.getItem("token");
    if (auth) {
      customHeaders.authorization = auth;
    }
    const res = await fetch(url, {
      method: "DELETE",
      headers: customHeaders,
      body: JSON.stringify(body),
    });
    data = await res.json();
    checkHTTPStatus(res.status);
    dispatch({ type: success, data });
  } catch (e) {
    if (failure) {
      dispatch({ type: failure, data });
    }
  }
};
