/**
 * Task 08: Utility Library Demo
 */
const {
  range,
  sortNumbersAsc,
  sortStringsLocale,
  flattenDeep,
  hasAny
} = require("./utils");

console.log("range(1, 5):", range(1, 5));
console.log("pagination (1..10):", range(1, 10));
console.log("descending range:", range(5, 1, -1));

console.log("sortNumbersAsc([5,2,9]):", sortNumbersAsc([5, 2, 9]));
console.log("sortStringsLocale(['é', 'a', 'b']):", sortStringsLocale(["é", "a", "b"]));


const nestedComments = [
  "root",
  ["reply1", ["reply1.1", ["reply1.1.1"]]],
  ["reply2"]
];
console.log("flattenDeep(nestedComments):", flattenDeep(nestedComments));


console.log("hasAny([1,2,3], x => x > 2):", hasAny([1, 2, 3], x => x > 2));
console.log(
  "hasAny(['a','b'], s => s === 'c'):",
  hasAny(["a", "b"], s => s === "c")
);
