const utils = require('./utils');

const passwordLengthValidator = Object.freeze({
  function: utils.stringGreaterThan(2),
  errorMessage: 'Password length is too short'
});

const specialCharactersValidator = Object.freeze({
  function: utils.stringMatchesRegex(/\W/),
  errorMessage: 'Password requires a non-alphanumeric and non-underscore character'
});

exports.passwordLengthValidator = passwordLengthValidator;
exports.specialCharactersValidator = specialCharactersValidator;
