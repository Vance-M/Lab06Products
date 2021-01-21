// Data
import { doughnuts } from '../Products/doughnuts.js';
import { cart } from './data.js';
// Functions

import { renderLineItems, calcItemTotal, findById } from './cartutils.js';

// 

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const doughnut = findById(item.id, doughnuts);
    const totalForThisDoughnut = calcItemTotal(item.id);

    total = total + Number(totalForThisDoughnut);
    const tableRowDOM = renderLineItems(item, doughnut);

    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr);