/**
 * Task 02: Role-Based Access Check
 */
function canAccess(currentUserRoles, featureAccessRoles) {
  return currentUserRoles.some(role => featureAccessRoles.includes(role));
}

function explainAccess(currentUserRoles, featureAccessRoles) {
  const match = currentUserRoles.find(r => featureAccessRoles.includes(r));
  return match
    ? `Access granted (matched role: ${match})`
    : "Access denied (no matching roles)";
}
