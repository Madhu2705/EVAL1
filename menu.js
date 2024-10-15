function increase(itemId) {
  const item = document.getElementById(itemId);
  let currentValue = parseInt(item.textContent); 
  item.textContent = currentValue + 1;
}


function decrease(itemId) {
  const item = document.getElementById(itemId);
  let currentValue = parseInt(item.textContent); 
  if (currentValue > 0) { 
      item.textContent = currentValue - 1; 
  }
}
