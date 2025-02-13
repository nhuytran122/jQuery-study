console.log('Running');

const isCovid = true;
if(isCovid) {
    console.log('Infected with COVID-19');
} else {
    console.log('Not infected with COVID-19');
}

const month = 1;

switch(month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    default:
        console.log('N/A');
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello('Nhu Y')

// Type Conversion
const error = 'Something wrong';
const hasError = Boolean(error);

const mark = 9;
const markString = mark.toString();

const type = '1';
const typeId = Number.parseInt(type);

// Truthy vs Falsy
// FALSY:
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
// document.all

console.log(Boolean('Abc')); // true
console.log(Boolean(50)); // true