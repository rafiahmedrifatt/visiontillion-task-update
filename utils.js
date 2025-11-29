/**
 * Utility mini-library
 */

function range(start, stop, step = 1) {
  if (step === 0) throw new Error("step cannot be 0");
  const result = [];
  if (step > 0) {
    for (let v = start; v <= stop; v += step) result.push(v);
  } else {
    for (let v = start; v >= stop; v += step) result.push(v);
  }
  return result;
}

function sortNumbersAsc(array) {
  return [...array].sort((a, b) => a - b);
}

function sortStringsLocale(array) {
  return [...array].sort((a, b) => a.localeCompare(b));
}

function flattenDeep(array) {
  return array.flat(Infinity);
}

function hasAny(array, predicate) {
  return array.some(predicate);
}

module.exports = {
  range,
  sortNumbersAsc,
  sortStringsLocale,
  flattenDeep,
  hasAny
};
