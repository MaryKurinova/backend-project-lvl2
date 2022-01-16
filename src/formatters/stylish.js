import _ from 'lodash';

const stringify = (currentData, depth) => {
  if (!_.isObject(currentData)) {
    return String(currentData);
  }

  const indent = depth * 4;
  const currentIndent = ' '.repeat(indent);
  const bracketIndent = ' '.repeat(indent - 4);

  const values = Object
    .entries(currentData)
    .map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...values,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylishFormat = (tree) => {
  const iter = (node, depth) => node.flatMap((item) => {
    const {
      key, type, children, newValue, oldValue,
    } = item;

    const identSize = depth * 4;
    const ident = ' '.repeat(identSize - 2);
    const bracketIndent = ' '.repeat(identSize);

    switch (type) {
      case 'removed': {
        return `${ident}- ${key}: ${stringify(newValue, depth + 1)}`;
      }
      case 'added': {
        return `${ident}+ ${key}: ${stringify(newValue, depth + 1)}`;
      }
      case 'updated': {
        return [
          `${ident}- ${key}: ${stringify(oldValue, depth + 1)}`,
          `${ident}+ ${key}: ${stringify(newValue, depth + 1)}`,
        ];
      }
      case 'equal': {
        return `${ident}  ${key}: ${stringify(newValue, depth + 1)}`;
      }
      case 'object': {
        return [
          `${ident}  ${key}: {`,
          ...iter(children, depth + 1),
          `${bracketIndent}}`,
        ];
      }
      default: {
        throw new Error(`Unknown type: ${type}`);
      }
    }
  });

  const lines = iter(tree, 1);

  return ['{', ...lines, '}'].join('\n');
};

export default stylishFormat;
