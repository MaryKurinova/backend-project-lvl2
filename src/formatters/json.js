import _ from 'lodash';

const Getjson = (ast) => {
  const copy = _.cloneDeep(ast);

  return JSON.stringify(copy);
};

export default Getjson;
