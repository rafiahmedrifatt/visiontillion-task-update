/**
 * Task 05: Sales by Category
 */
function groupSalesByCategory(sales) {
  return sales.reduce((acc, item) => {
    const { category, amount = 0, quantity = 0 } = item;
    if (!acc[category]) {
      acc[category] = { totalRevenue: 0, itemCount: 0 };
    }
    acc[category].totalRevenue += amount;
    acc[category].itemCount += quantity;
    return acc;
  }, {});
}

function getTopCategoryByRevenue(grouped) {
  const entries = Object.entries(grouped);
  if (entries.length === 0) return null;
  const top = entries.reduce((best, [cat, data]) => {
    if (best === null || data.totalRevenue > best.revenue) {
      return { cat, revenue: data.totalRevenue };
    }
    return best;
  }, null);
  return top ? top.cat : null;
}
