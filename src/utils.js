const stringGreaterThan = (length) => (stringToCheck) => {
  return stringToCheck.length > length;
};

const stringMatchesRegex = (regex) => (stringToCheck) => {
  return Boolean(stringToCheck.match(regex));
};

exports.stringGreaterThan = stringGreaterThan;
exports.stringMatchesRegex = stringMatchesRegex;
