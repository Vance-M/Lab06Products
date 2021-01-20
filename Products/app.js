// import functions and grab DOM elements
import { doughnuts } from './doughnuts.js';
import { renderDoughnut } from './utils.js';
console.log(doughnuts);
const list = document.getElementById('list');
// initialize state

// set event listeners to update state and DOM

for (let doughnut of doughnuts) {
    const doughnutElement = renderDoughnut(doughnut);

    list.append(doughnutElement);
}
