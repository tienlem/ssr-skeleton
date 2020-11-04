/* eslint-disable func-names */
export const fakeAPi = (response, time) =>
  new Promise(function (resolve) {
    // A mock async action using setTimeout
    setTimeout(function () {
      resolve(response);
    }, time);
  }).then(function (result) {
    return result;
  });
