// import { doughnuts } from '../Products/doughnuts.js';
// import { cart as cartArray } from '../Cart/data.js';
export const currentCart = 'currentCart';
export const defaultCart = [];

// const cart = getCart();

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id){
            return item;
        }
    }
}

export function calcItemTotal(cartItem, doughnut) {
    const itemTotalA = doughnut.price * cartItem.quantity;
    const itemTotalTrue = Math.round(itemTotalA * 100) / 100;
    return itemTotalTrue.toFixed(2);
}

export function renderLineItems(cartItem, doughnut) {
    const quantityB = cartItem.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = doughnut.name;
    quantityTd.textContent = quantityB;
    priceTd.textContent = `$${calcItemTotal(cartItem, doughnut)}`;

    tr.append(nameTd);
    tr.append(quantityTd);
    tr.append(priceTd);

    return tr;
}

export function getCart() {
    const cartString = localStorage.getItem(currentCart);

    if (cartString) {
        const cartParsed = JSON.parse(cartString);
        return cartParsed;
    } else {
        const defaultCartString = JSON.stringify(defaultCart);

        localStorage.setItem(currentCart, defaultCartString);

        return defaultCart;
    }
}

export function clearCart() {
    const cartString = JSON.stringify(defaultCart);

    localStorage.setItem(currentCart, cartString);
}

export function setCart(cart) {
    const cartString = JSON.stringify(cart);

    localStorage.setItem(currentCart, cartString);
}

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}