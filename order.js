const cartList = document.querySelector('.cart-list');
const totalPriceSpan = document.getElementById('total-price');

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Create a list item element
  const listItem = document.createElement('