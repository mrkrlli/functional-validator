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
