// Data
import { doughnuts } from '../Products/doughnuts.js';
const clearCartButton = document.getElementById('clear-cart');

// Functions

import { renderLineItems, calcItemTotal, findById, getCart, clearCart, cartTotal } from './cartutils.js';
const cart = getCart();
// 

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const doughnut = findById(item.id, doughnuts);
    const totalForThisDoughnutF = calcItemTotal(item, doughnut);
    const totalForThisDoughnutA = Math.round(totalForThisDoughnutF * 100) / 100;
    total = cartTotal(total, totalForThisDoughnutA);
    const tableRowDOM = renderLineItems(item, doughnut);
    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total.toFixed(2)}`;

tr.append(td1, td2, td3);

table.append(tr);

clearCartButton.addEventListener('click', () =>{
    clearCart();
    window.location.reload();
});