export const removeKeyWithValue = ({ obj, value }) => {
  const cloneObj = { ...obj };
  Object.keys(cloneObj).forEach(
    key => cloneObj[key] === value && delete cloneObj[key],
  );
  return cloneObj;
};
