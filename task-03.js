/**
 * Task 03: Product Analytics Dashboard
 */
function getCartSubtotal(cart) {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function getMostExpensiveLineItem(cart) {
  if (!Array.isArray(cart) || cart.length === 0) return null;
  return cart.reduce((acc, item) =>
    item.price * item.quantity > acc.price * acc.quantity ? item : acc
  );
}

function getTotalQuantity(cart) {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}