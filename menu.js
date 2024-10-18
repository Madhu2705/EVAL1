// Function to load the cart from localStorage and display it on the page
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartList = document.querySelector('.cart-list');
  cartList.innerHTML = ''; // Clear the cart list before re-rendering

  Object.keys(cart).forEach((item) => {
    const quantity = cart[item];

    const cartItem = document.createElement('li');
    cartItem.className = 'list-group-item';

    cartItem.innerHTML = `
      <div>
        <h5>${item}</h5>
        <p>Quantity: <span id="${item}">${quantity}</span></p>
      </div>
      <div>
        <button class="btn btn-sm btn-success" onclick="increase('${item}')">+</button>
        <button class="btn btn-sm btn-danger" onclick="decrease('${item}')">-</button>
      </div>
    `;

    cartList.appendChild(cartItem);
  });

  updateTotalPrice(); // Update the total price of the cart
}

// Function to increase the quantity of an item
function increase(item) {
  let quantityElement = document.getElementById(item);
  let currentQuantity = parseInt(quantityElement.textContent);
  currentQuantity++;
  quantityElement.textContent = currentQuantity;
  updateCart(item, currentQuantity);
  loadCart(); // Refresh the cart display
}

// Function to decrease the quantity of an item
function decrease(item) {
  let quantityElement = document.getElementById(item);
  let currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    currentQuantity--;
    quantityElement.textContent = currentQuantity;
    updateCart(item, currentQuantity);
    loadCart(); // Refresh the cart display
  }
}

// Function to update the cart in localStorage
function updateCart(item, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (quantity > 0) {
    cart[item] = quantity; // Add or update the item in the cart
  } else {
    delete cart[item]; // Remove the item if the quantity is 0
  }
  localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
  updateTotalPrice(); // Update the total price of the cart
}

// Function to calculate and update the total price of the cart
function updateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  let totalPrice = 0;
  
  Object.keys(cart).forEach((item) => {
    const quantity = cart[item];
    const itemPrice = 100; // Replace with your actual item price
    totalPrice += quantity * itemPrice;
  });

  document.getElementById('total-price').textContent = `Rs ${totalPrice.toFixed(2)}`;
}

// Load the cart when the page is loaded
window.onload = loadCart;
