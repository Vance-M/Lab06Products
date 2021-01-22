
import { addToCart } from '../Cart/cartutils.js';

export function renderDoughnut(doughnut) {
    const li = document.createElement('h3');
    li.classList.add('dough-item');

    const h3 = document.createElement('h3');
    h3.classList.add('dough-name');
    h3.textContent = doughnut.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('dough-image');
    li.append(img);
    img.src = `../assets/${doughnut.image}`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('dough-description');
    pDescription.textContent = doughnut.description;
    li.append(pDescription);

    const pSpecialty = document.createElement('p');
    pSpecialty.classList.add('dough-specialty');
    if (doughnut.specialty) {
        pSpecialty.textContent = 'Yes';
    } else {
        pSpecialty.textContent = 'No';
    }
    li.append(pSpecialty);

    const pPrice = document.createElement('p');
    pPrice.classList.add('dough-price');
    pPrice.textContent = `$${doughnut.price}`;
    li.append(pPrice);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        addToCart(doughnut.id);
    });

    button.textContent = 'Add to Cart';
    li.append(button);

    return li;
}