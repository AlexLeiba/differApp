import axios, { AxiosRequestConfig } from "axios";

export interface NetworkRequestBase {
  method: string;
}

const DEFAULT_REQUEST_TIMEOUT = 30000;

export async function sendPostRequest<T>(
  url: string,
  body: T,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_REQUEST_TIMEOUT,
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
  };
  try {
    return await axios.post(url, body, conf);
  } catch (e) {
    throw e;
  }
}

export async function sendGetRequest(
  url: string,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_REQUEST_TIMEOUT,
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: "Bearer " + token }),
    },
  };
  try {
    return await axios.get(url, conf);
  } catch (e) {
    throw e;
  }
}
