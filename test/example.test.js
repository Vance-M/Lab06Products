// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDoughnut } from '../Products/utils.js';
import { findById } from '../Cart/cartutils.js';
import { doughnuts } from '../Products/doughnuts.js';

const test = QUnit.test;

test('test if renderDoughnut creates listed elements', (expect) => {
    //Arrange
    const glazed = {
        id: 1,
        name: 'Glazed',
        image: 'glazed-doughnut.jpg',
        description: 'Classic Glazed Doughnut',
        specialty: false,
        price: '.50',
    };
    // Set up your arguments and expectations
    const expected = `<h3 class="dough-item"><h3 class="dough-name">Glazed</h3><img class="dough-image" src="../assets/glazed-doughnut.jpg"><p class="dough-description">Classic Glazed Doughnut</p><p class="dough-specialty">No</p><p class="dough-price">$.50</p><button>Add to Cart</button></h3>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDoughnut(glazed);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('tests findById function', (expect) => {
        // Set up your arguments and expectations
    const expected =
     {
         id: 2,
         name: 'Old-Fashioned',
         image: 'old-fashioned.jpeg',
         description: 'Doughnut made with sour cream and a tapered edge',
         specialty: false,
         price: '.60',
     };
    
        //Act 
        // Call the function you're testing and set the result to a const
    const actual = findById(2, doughnuts);
    
        //Expect
        // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});