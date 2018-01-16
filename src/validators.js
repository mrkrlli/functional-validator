const utils = require('./utils');

const passwordLengthValidator = {
  function: utils.stringGreaterThan(2),
  errorMessage: 'Password length is too short'
};

const specialCharactersValidator = {
  function: utils.stringMatchesRegex(/\W/),
  errorMessage: 'Password requires a non-alphanumeric and non-underscore character'
}

exports.passwordLengthValidator = passwordLengthValidator;
exports.specialCharactersValidator = specialCharactersValidator;
