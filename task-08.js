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

// Range examples (pagination)
console.log("range(1, 5):", range(1, 5));                // [1,2,3,4,5]
console.log("pagination (1..10):", range(1, 10));        // [1..10]
console.log("descending range:", range(5, 1, -1));       // [5,4,3,2,1]

// Sorting examples
console.log("sortNumbersAsc([5,2,9]):", sortNumbersAsc([5, 2, 9]));
console.log("sortStringsLocale(['é', 'a', 'b']):", sortStringsLocale(["é", "a", "b"]));

// Flattening nested comments / arrays
const nestedComments = [
  "root",
  ["reply1", ["reply1.1", ["reply1.1.1"]]],
  ["reply2"]
];
console.log("flattenDeep(nestedComments):", flattenDeep(nestedComments));

// hasAny examples
console.log("hasAny([1,2,3], x => x > 2):", hasAny([1, 2, 3], x => x > 2));
console.log(
  "hasAny(['a','b'], s => s === 'c'):",
  hasAny(["a", "b"], s => s === "c")
);
