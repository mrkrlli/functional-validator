const test = require('tape');
const validator = require('../src/validation');

test('Basic password validator', function(assert) {
  assert.deepEqual(
    validator.basicValidation("123"),
    { },
    'Given a string length > 2, return an empty object'
  );

  assert.end();
});

test('Basic password validator', function(assert) {
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

test('Basic password validator', function(assert) {
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
