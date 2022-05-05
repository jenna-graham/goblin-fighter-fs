// import functions and grab DOM elements
const form = document.querySelector('form');
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

    const dragonName = data.get('dragon-name');

    const newDragon = {
        name: dragonName,
        hp: Math.ceil(Math.random() * 6),
    };

    dragons.push(newDragon);

    // displayDragons();


}); 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
