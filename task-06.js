/**
 * Task 06: Fast Lookup Tables
 */
function buildPostLookupById(posts) {
  return posts.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
}

function buildPostLookupByIdMap(posts) {
  return posts.reduce((map, p) => map.set(p.id, p), new Map());
}
