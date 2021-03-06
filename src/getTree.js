import _ from 'lodash';

const getTree = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  const uniqKeysFromObjects = _.sortBy(_.union(key1, key2));
  const result = uniqKeysFromObjects.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj1, key)) {
      return {
        value: value2,
        status: 'added',
        key,
      };
    }
    if (!_.has(obj2, key)) {
      return {
        value: value1,
        status: 'removed',
        key,
      };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        value: getTree(value1, value2),
        status: 'nested',
        key,
      };
    }
    if (value1 !== value2) {
      return {
        key,
        value: {
          first: value1,
          second: value2,
        },
        status: 'changed',
      };
    }
    return {
      key,
      value: value1,
      status: 'unchanged',
    };
  });

  return result;
};

export default getTree;
