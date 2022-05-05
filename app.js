// import functions and grab DOM elements
import { renderDragon } from './utils.js';
const form = document.querySelector('form');
const dragonList = document.querySelector('.dragons');

// let state
let dragons = [
    { name: 'Falkor', hp: 3 },
    { name: 'Drogon', hp: 5 },
    { name: 'Smaug', hp: 2 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = new FormData(form);

    const dragonName = userData.get('dragon-name');

    const newDragon = {
        name: dragonName,
        hp: Math.ceil(Math.random() * 6),
    };

    dragons.push(newDragon);

    displayDragons();


}); 

function displayDragons() {
    dragonList.textContent = '';

    for (let dragon of dragons) {
        const dragonEl = renderDragon(dragon);
        dragonList.append(dragonEl);
    }

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
