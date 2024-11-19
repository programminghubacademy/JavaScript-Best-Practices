// DOM manipulation inefficient code

const items = document.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    items[i].textContent = 'Updated text ' + i;
}

// DOM Manipulation Efficient Code
const itemsContainer = document.querySelector('#items-container');
let itemsHTML = '';

for (let i = 0; i < items.length; i++) {
    itemsHTML += `<div class="item">Updated text ${i}</div>`;
}

itemsContainer.innerHTML = itemsHTML;