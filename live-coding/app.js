// let fullname = "Jakob Rolandsson";

// en funktion som ska dela upp namnet i för och efternamn
// ex. Jakob, Rolandsson

/*function splitName(name) { // namn splitName, parameter name
  let nameParts = name.split(" "); // Från string till array
  let firstName = nameParts[0];
  let surname = nameParts[1];

  return `${firstName}, ${surname}`; // returnerar en text
}*/

/*const splitName = function (name) {
  let nameParts = name.split(" "); // Från string till array
  let firstName = nameParts[0];
  let surname = nameParts[1];

  return `${firstName}, ${surname}`; // returnerar en text
}*/

// const splitName = (name) => {
//   let nameParts = name.split(" "); // Från string till array
//   let firstName = nameParts[0];
//   let surname = nameParts[1];

//   return `${firstName}, ${surname}`; // returnerar en text
// }

// fullname = splitName(fullname);

// console.log(fullname);


/*function throwDice() {
  return Math.random() * 6;
}*/

//const throwDice = () => { return Math.random() * 6; }

const throwDice = () => Math.floor(Math.random() * 6) + 1;

console.log(throwDice());


const btn = document.querySelector(".btn");
let counter = 0;

// function handleButtonClick(event) {
//   //console.log(event);
//   counter = counter + 1;
//   console.log("Button clicked " + counter + " times");
// }

// const handleButtonClick = function (event) {
//   counter = counter + 1;
//   console.log("Button clicked " + counter + " times");
// }

// const handleButtonClick = (event) => {
//   counter = counter + 1;
//   console.log("Button clicked " + counter + " times");
// }

// btn.addEventListener("click", handleButtonClick);

// btn.addEventListener('click', function (event) {
//   counter = counter + 1;
//   console.log("Button clicked " + counter + " times");
// });

/*btn.addEventListener("click", (event) => {
  counter = counter + 1;
  console.log("Button clicked " + counter + " times");
  console.log(event.target.textContent);
});*/

let fullname = "Jakob Rolandsson";

// FÅR EJ ÄNDRA PÅ DENNA FUNKTION
const splitName = (name, formatNameFunction) => {
  let nameParts = name.split(" "); // Från string till array ["Jakob", "Rolandsson"]
  let firstName = nameParts[0];
  let surname = nameParts[1];

  return formatNameFunction(firstName, surname); // returnerar en text formaterat med high order function --> formatNameFunction
}

// function formatNameWithComma(fName, sName) {
//   return `${fName}, ${sName}`
// }

// ===== Gör så att nästa anrop använder en High order function för att formatera namnet med efternamn före förnamnet =====

// fullname = splitName(fullname, formatNameWithComma); // "Jakob, Rolandsson"
// fullname = splitName(fullname, (fName, sName) => { return `${fName}, ${sName}` }); // "Jakob, Rolandsson"
// fullname = splitName(fullname, (fName, sName) => { return `${sName}, ${fName}` }); // "Rolandsson, Jakob"

// fullname = splitName(fullname, (fName, sName) => { return `${sName[0]}., ${fName}` }); // "R., Jakob"
// fullname = splitName(fullname, (fName, sName) => { return `${sName.charAt(0)}., ${fName}` }); // "R., Jakob"
// fullname = splitName(fullname, (fName, sName) => { return `${sName.slice(0, 1)}., ${fName}` }); // "R., Jakob"

const formatFirstCharSurname = (fName, sName) => {
  let firstChar = sName.charAt(0);
  return `${firstChar}., ${fName}`;
}

fullname = splitName(fullname, formatFirstCharSurname); // "R., Jakob"

console.log(fullname);