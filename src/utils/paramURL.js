export const getAllParameter = locationSearch => {
  if (!locationSearch) return {};
  const params = {};
  locationSearch
    .substr(1)
    .split('&')
    .forEach(function (item) {
      const tmp = item.split('=');
      params[tmp[0]] = decodeURIComponent(tmp[1]);
    });
  return params;
};
