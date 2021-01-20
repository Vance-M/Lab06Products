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
    return itemTotalTrue;
}