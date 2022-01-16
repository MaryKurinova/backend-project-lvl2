import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const plainFormat = (data, prefix = '') => {
  const result = data.map((item) => {
    const {
      key, type, children, newValue, oldValue,
    } = item;
    const currentOldValue = stringify(oldValue);
    const currentNewValue = stringify(newValue);
    const currentKey = prefix === '' ? key : `${prefix}.${key}`;

    switch (type) {
      case 'object': {
        const innerTree = plainFormat(children, currentKey);
        return innerTree;
      }
      case 'added': {
        return `Property '${currentKey}' was added with value: ${currentNewValue}`;
      }
      case 'removed': {
        return `Property '${currentKey}' was removed`;
      }
      case 'equal': {
        return null;
      }
      case 'updated': {
        return `Property '${currentKey}' was updated. From ${currentOldValue} to ${currentNewValue}`;
      }
      default: {
        return `Unknown type: ${type}`;
      }
    }
  }).filter(_.identity).join('\n');

  return result;
};

export default plainFormat;
