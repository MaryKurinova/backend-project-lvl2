const replace = (key, value) => {
  if (value === undefined) {
    return 'undefined';
  }
  return value;
};

const json = (diffTree) => JSON.stringify(diffTree, replace);

export default json;
