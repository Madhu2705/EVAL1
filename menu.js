document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-name');
    alert(`Your item '${itemName}' has been added to the cart!`);
  });
});