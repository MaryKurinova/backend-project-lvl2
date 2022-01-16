import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'object', children: getTree(data1[key], data2[key]) };
    }
    if (!_.has(data1, key)) {
      return { key, type: 'added', newValue: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', newValue: data1[key] };
    }
    if (data1[key] === data2[key]) {
      return {
        key, type: 'equal', oldValue: data1[key], newValue: data2[key],
      };
    }
    return {
      key, type: 'updated', oldValue: data1[key], newValue: data2[key],
    };
  });

  return result;
};

export default getTree;
