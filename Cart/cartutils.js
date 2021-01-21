import { doughnuts } from '../Products/doughnuts.js';
import { cart } from '../Cart/data.js';


export function findById(id, array) {
    for (let item of array) {
        if (item.id === id){
            return item;
        }
    }
}

export function calcItemTotal(id) {
    const doughnutA = findById(id, doughnuts);
    const quantityA = findById(id, cart);

    const itemTotalA = doughnutA.price * quantityA.quantity;
    const itemTotalTrue = Math.round(itemTotalA * 100) / 100;
    return itemTotalTrue.toFixed(2);
}

export function renderLineItems(cart, doughnuts) {
    const quantityB = cart.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = doughnuts.name;
    quantityTd.textContent = quantityB;
    priceTd.textContent = `$${calcItemTotal(2)}`;

    tr.append(nameTd);
    tr.append(quantityTd);
    tr.append(priceTd);

    return tr;
}