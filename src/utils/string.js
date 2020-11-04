/* eslint-disable consistent-return */
import isNil from 'lodash/fp/isNil';

export const numberWithCommas = x => {
  if (isNil(x)) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
