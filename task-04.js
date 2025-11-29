/**
 * Task 04: Survey Analyzer
 */
function countResponses(responses) {
  return responses.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
  }, {});
}

function getTopAnswer(counts) {
  const entries = Object.entries(counts);
  const max = Math.max(...entries.map(([_, c]) => c));
  const tops = entries.filter(([_, c]) => c == max).map(([a]) => a);
  return tops.length === 1 ? tops[0] : tops;
}
