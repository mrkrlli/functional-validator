const test = require('tape');
const validator = require('../src/validation');

test('Strict password validator: proper length', function(assert) {
  assert.deepEqual(
    validator.validatePasswordStrict("123!"),
    { },
    'Given a string length > 2, return an empty object'
  );

  assert.end();
});

test('Strict password validator: too short', function(assert) {
  assert.deepEqual(
    validator.validatePasswordStrict("!"),
    {
      errors: [
        'Password length is too short'
      ]
    },
    'Given a string length < 2, return an object with proper length error'
  );

  assert.end();
});

test('Strict password validator: equal length', function(assert) {
  assert.deepEqual(
    validator.validatePasswordStrict("1!"),
    {
      errors: [
        'Password length is too short'
      ]
    },
    'Given a string length === 2, return an object with proper length error'
  );

  assert.end();
});

test('Strict password validator: contains non-alphanumeric character', function(assert) {
  assert.deepEqual(
    validator.validatePasswordStrict("123!"),
    { },
    'Given string with non-alphanmeric character, return empty object'
  );

  assert.end();
});

test('Strict password validator: no non-alphanumeric character', function(assert) {
  assert.deepEqual(
    validator.validatePasswordStrict("123"),
    {
      errors: [
        'Password requires a non-alphanumeric and non-underscore character'
      ]
    },
    'Given a string with NO non-alphanmeric character, return object with proper "special char" error'
  );

  assert.end();
});
