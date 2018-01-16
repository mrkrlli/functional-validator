const utils = require('./utils');

const passwordLengthValidator = {
  function: utils.stringGreaterThan(2),
  errorMessage: 'Password length is too short'
};

exports.passwordLengthValidator = passwordLengthValidator;
