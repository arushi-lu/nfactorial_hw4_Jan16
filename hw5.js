//Find element by id
console.log(document.getElementById("age-table"));

//Find labels inside table
const table = document.getElementById("age-table");
const elements = table.querySelectorAll("label");

for(let i = 0; i < elements.length; i++){
    console.log(elements[i]);
}

//Find td Age

const td = table.querySelector('td');
console.log(td);

//Fins form

const body = document.body;
const form = body.querySelector("form");
console.log(form);

//Find first input
console.log(document.querySelector("input"));

//Find last input

const inputs = document.querySelectorAll("input");

console.log(inputs[inputs.length-1]);


//Alert output = BODY