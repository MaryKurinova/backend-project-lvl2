import _ from 'lodash';
import Getjson from '../src/formatters/json.js';

const nestedAst = [
  {
    type: 'nested',
    key: '',
  },
];

describe('Test json formatter', () => {
  test('Return valid json string', () => {
    const ast = _.cloneDeep(nestedAst);

    const data = Getjson(ast);

    expect(() => JSON.parse(data)).not.toThrow();
  });

  test('Return json when called with valid ast', () => {
    const data = Getjson(nestedAst);
    const actual = JSON.parse(data);

    expect(actual).toEqual(nestedAst);
  });

  test('Must be immutable', () => {
    const ast = _.cloneDeep(nestedAst);
    const expected = _.cloneDeep(nestedAst);

    const data = Getjson(ast);
    const actual = JSON.parse(data);
    _.set(ast, '[0].value', '');

    expect(actual).toEqual(expected);
    expect(actual[0].value).not.toBe(ast[0].value);
  });
});
