const test = require('tape');
const validator = require('../src/validation');

test('Basic password validator: proper length', function(assert) {
  assert.deepEqual(
    validator.basicValidation("123"),
    { },
    'Given a string length > 2, return an empty object'
  );

  assert.end();
});

test('Basic password validator: too short', function(assert) {
  assert.deepEqual(
    validator.basicValidation("1"),
    {
      errors: [
        'Password length is too short'
      ]
    },
    'Given a string length < 2, return an object with proper length error'
  );

  assert.end();
});

test('Basic password validator: equal length', function(assert) {
  assert.deepEqual(
    validator.basicValidation("12"),
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
    validator.strictValidation("123!"),
    { },
    'Given string with non-alphanmeric character, return empty object'
  );

  assert.end();
});

test('Strict password validator: no non-alphanumeric character', function(assert) {
  assert.deepEqual(
    validator.strictValidation("123"),
    {
      errors: [
        'Include a non-alphanumeric character in your password'
      ]
    },
    'Given a string with NO non-alphanmeric character, return object with proper "special char" error'
  );

  assert.end();
});
