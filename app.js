// import functions and grab DOM elements
import { renderDragon } from './utils.js';
const defeatedNumber = document.querySelector('defeated-number');
const warriorHpEl = document.querySelector('warrior-hp');
const form = document.querySelector('form');
const dragonList = document.querySelector('.dragons');

// let state
let dragons = [
    { name: 'Falkor', hp: 3 },
    { name: 'Drogon', hp: 5 },
    { name: 'Smaug', hp: 2 },
];
let defeatedDragonCount = 0;
let warriorHp = 0;

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
        

        dragonEl.addEventListener('click', () =>{
            dragonClicker(dragon);
        });
        dragonList.append(dragonEl);

    }

}
displayDragons();

function dragonClicker(dragon) {
    console.log(`i am fighting ${dragon.name}!`);

    if (dragon.hp === 0) return;
    if (player.hp === 0) return;

    const warriorHit = Math.random();

    if (warriorHit < .5) {
        dragon.hp--;
        displayDragons();
        alert(`you did it! you hit ${dragon.name}!`);

        if (dragon.hp === 0) {
            defeatedDragonCount++;
            defeatedNumber.textContent = defeatedDragonCount;
            alert (`You are a fine warrior! ${dragon.name} has died, XXX `)
        }


    }
}

