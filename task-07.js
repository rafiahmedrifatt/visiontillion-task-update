/**
 * Task 07: Denormalized Blog Data
 */
function groupPostsByAuthor(posts) {
  return posts.reduce((acc, p) => {
    if (!acc[p.authorId]) acc[p.authorId] = [];
    acc[p.authorId].push(p);
    return acc;
  }, {});
}

function denormalizeUsersWithPosts(users, postsByAuthor) {
  return users.map(u => ({
    ...u,
    posts: postsByAuthor[u.userId] || []
  }));
}

function getPostsOfUser(denorm, userId) {
  return denorm.find(u => u.userId === userId)?.posts || [];
}

function getTotalPostsPerUser(denorm) {
  return denorm.map(u => ({
    userId: u.userId,
    total: u.posts.length
  }));
}
