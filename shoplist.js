const itemsInput = document.querySelectorAll('.itemsclass input')
const itemAmountInputs = document.querySelectorAll('.amountclass input');
const itemPriceInputs = document.querySelectorAll('.priceclass input');
const totalInput = document.getElementById('priceTotal');
const clearButton = document.querySelector('.clearButton');


itemAmountInputs.forEach((input, index) => {
    input.addEventListener('input', calculateTotal);
});

itemPriceInputs.forEach((input, index) => {
    input.addEventListener('input', calculateTotal);
});


function calculateTotal() {
let total = 0;


for (let i = 0; i < itemAmountInputs.length; i++) {
  let amount = parseFloat(itemAmountInputs[i].value);
  const price = parseFloat(itemPriceInputs[i].value);

  
  if (isNaN(amount) && price >= 1 ) {
    amount = 1;
    itemAmountInputs[i].value = amount; // Update the input field
  }

  // Calculate the subtotal for the item
  const subtotal = amount * price;

  // Add the subtotal to the total
  if (!isNaN(subtotal)) {
    total += subtotal;
  }
}

// Update the total input value
totalInput.value = total.toFixed(2);
}

// Clear all fields
clearButton.addEventListener('click', () => {
    itemsInput.forEach((input) => {
        input.value = '';
    });
    itemAmountInputs.forEach((input) => {
        input.value = '';
    });

    itemPriceInputs.forEach((input) => {
        input.value = '';
    });

    totalInput.value = '';
});