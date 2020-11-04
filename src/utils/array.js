/* eslint-disable no-restricted-syntax */
import map from 'lodash/fp/map';

export const distinctObjectInArray = ({ keyName, array }) => {
  const result = [];
  const mapNative = new Map();
  for (const item of array) {
    if (!mapNative.has(item[keyName])) {
      mapNative.set(item[keyName], true); // set any value to Map
      result.push({
        ...item,
      });
    }
  }
  return result;
};

export const updateItemInArray = (
  array,
  filterFunction,
  updateItemCallback,
) => {
  const updatedItems = map(item => {
    if (filterFunction(item)) {
      const updateItem = updateItemCallback(item);
      return updateItem;
    }
    return item;
  }, array);
  return updatedItems;
};
