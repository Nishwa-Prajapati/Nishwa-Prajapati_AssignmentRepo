function calculateTotalSpentByCategory(transactions) {
    // Create an object to store the total spent for each category
    const totalsByCategory = {};
  
    // Iterate over each transaction
    for (const transaction of transactions) {
      const { category, price } = transaction;
  
      // If the category doesn't exist in the totalsByCategory object, initialize it
      if (!totalsByCategory[category]) {
        totalsByCategory[category] = 0;
      }
  
      // Add the price to the total for the category
      totalsByCategory[category] += price;
    }
  
    // Convert the totalsByCategory object into an array of objects
    return Object.keys(totalsByCategory).map(category => ({
      category,
      totalSpent: totalsByCategory[category]
    }));
  }
  
  const transactions = [
    { id: 1, itemName: 'item1', category: 'food', price: 10 },
    { id: 2, itemName: 'item2', category: 'food', price: 20 },
    { id: 3, itemName: 'item3', category: 'clothing', price: 50 },
    { id: 4, itemName: 'item4', category: 'food', price: 5 },
    { id: 5, itemName: 'item5', category: 'clothing', price: 30 }
  ];
  
  console.log(calculateTotalSpentByCategory(transactions));