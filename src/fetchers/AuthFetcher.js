import config from 'config';
import service, { handleGeneralError } from './index';

const BASE_URL = config.webApi;
export function login(payload) {
  return service(BASE_URL, {
    url: '/api/login',
    method: 'POST',
    data: {
      payload,
    },
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
}

export const fakeAPi = (response, time) =>
  new Promise(function (resolve) {
    console.log('web api', process.env);
    // A mock async action using setTimeout
    setTimeout(function () {
      resolve(response);
    }, time);
  }).then(function (result) {
    return result;
  });
