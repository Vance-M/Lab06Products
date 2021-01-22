import { doughnuts } from '../Products/doughnuts.js';
// import { cart } from '../Cart/data.js';
export const currentCart = 'currentCart';
export const defaultCart = [];

const cart = getCart();

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
    priceTd.textContent = `$${calcItemTotal(doughnuts.id)}`;

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