const test = require('tape');
const utils = require('../src/utils');

test('String length greater-than function', function(assert) {
  assert.equal(
    utils.stringGreaterThan(2)("123"),
    true,
    'Given a string longer than specified length, return true'
  );

  assert.end();
});

test('String length greater-than function', function(assert) {
  assert.equal(
    utils.stringGreaterThan(2)("1"),
    false,
    'Given a string less than specified length, return false'
  );

  assert.end();
});

test('String matches regex', function(assert) {
  assert.equal(
    utils.stringMatchesRegex(/\W/)("!"),
    true,
    'Given a string that matches given regex, return true'
  );

  assert.end();
});

test('String does not match regex', function(assert) {
  assert.equal(
    utils.stringMatchesRegex(/\W/)("1"),
    false,
    'Given a string that does NOT matches given regex, return false'
  );

  assert.end();
});
