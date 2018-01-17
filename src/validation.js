const R = require('ramda');
const validators = require('./validators');

const generateValidationErrors = (validators, stringToValidate) => {
  return validators.reduce(function checkStringWithValidator(errors, validator) {
    if (!validator.function(stringToValidate)) {
      errors.push(validator.errorMessage);
    }

    return errors;
  }, []);
};

const addErrorsToObject = (errors) => {
  return errors.length > 0 ? { errors: errors } : {};
};

const validateString = R.curry(R.pipe(generateValidationErrors, addErrorsToObject));

const strictValidators = Object.freeze([
  validators.passwordLengthValidator,
  validators.specialCharactersValidator
]);

const validatePasswordStrict = validateString(strictValidators);

exports.validatePasswordStrict = validatePasswordStrict;
