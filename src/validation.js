const validators = require('./validators');

const validator = (validators) => (stringToValidate) => {
  const errorMessages = validators.reduce(function checkStringWithValidator(errors, validator) {
    if (!validator.function(stringToValidate)) {
      errors.push(validator.errorMessage);
    }

    return errors;
  }, []);

  return errorMessages.length > 0 ? { errors: errorMessages } : {};
};

const strictValidators = [
  validators.passwordLengthValidator,
  validators.specialCharactersValidator
]

const strictValidation = validator(strictValidators);

exports.strictValidation = strictValidation;
