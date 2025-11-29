/**
 * Task 09: Implement Your Own reduce
 */
function myReduce(array, callback, initialValue) {
  if (array.length === 0 && initialValue === undefined) {
    throw new Error("Reduce of empty array with no initial value");
  }

  let acc = initialValue !== undefined ? initialValue : array[0];
  let start = initialValue !== undefined ? 0 : 1;

  for (let i = start; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}
