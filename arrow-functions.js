/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addtwonumbers(a,b){
    return a + b;
}

let sum = addtwonumbers(3,5)
console.log(sum);

// Arrow Function With Parameters
const addtwonumbers2 = (a,b) => {
    return a + b;
}

let sum2 = addtwonumbers2(4,5)
console.log(sum2)

// Single Line Arrow Function With Parameters
// the return of a +b is assumed here, no need to code it

const addtwonumbers3 = (a,b) => a + b;
let sum3 = addtwonumbers3(5,5)
console.log(`sum3 = ${sum3}`)

// Implicit Returns
// when there is only one parameter no brackets are needed.
// when there are no parameters you have to use empty brackets to indicate it is a function
const saysomething= message =>console.log(message)
saysomething('Hello');

const sayhello = () => console.log('Say Hiiiii!')
sayhello();

// Returning Multiple Lines
// Multiple lines of code must be wrapped inside curly braces

const jumpstart = () => {
    `<p>
    give me a para
    </p>`
}

console.log(jumpstart());
