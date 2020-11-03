import axios from 'axios';
import isNil from 'lodash/fp/isNil';

/**
 * Create an Axios Client with defaults
 */
const createClient = baseURL =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    },
  });

/**
 * Request Wrapper with default success/error actions
 */
const request = function (baseURL, options) {
  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  const client = createClient(baseURL);

  return client(options).then(onSuccess).catch(onError);
};

export const handleGeneralError = error => {
  if (!isNil(error.response)) {
    return {
      error: error.response
        .clone()
        .json()
        .catch(() => error.response.text())
        .then(objData => ({
          error: { ...objData, status: error.response.status },
        })),
    };
  }
  return { error };
};

export default request;
