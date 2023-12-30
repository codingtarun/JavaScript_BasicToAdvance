/**
 * Strict mode : A restricted variant of JavaScript which disables certain error-prone features and helps catch common coding errors.
 *              Introduced in ECMAScript 5(ES5).
 * When enable strict mode : 
 * 1. We must declare variable with 'var','let' or 'const' keyword.
 * 2. Octal literals (01234) are not allowed.
 * 3. Can't assign value to read-only property.
 * 4. Deleting variables, functions or function arguments not allowed.
 * 5. 'with' statement is not allowed.
 * 
 * Enable Strict mode : by default java script is not 'strict enabled' to enable strict mode following is the syntex : 
 * 'use strict'; 
 * 
 * We can enable strict mode for a particular block or function.
 */

'use strict';

/**
 * Function : Block of code that performs a specific task and can be called or invoked as per the requirements.
 */

/**
 * Declaring a function & passing arguments to it
 * 
 */
function funOne(x,y){
    const msg = "This is Function One";
    const z = x + y;
    return `Sum of input is ${z} and the Message is ${msg}`;

}

/**
 * Calling / running / invoking a function
 */
console.log(funOne(3,6));

/**
 * Function Expression  : function is assigned to a variable.
 * 
 */

const calAge = function(year){
    return `Your age is ${2024-year}`;
}

console.log(calAge(1990));

/**
 * Arrow function (ES6+):  Arrow functions provide a more concise syntax for writing functions, especially for short functions with a single statement.
 * No need to write 'return' explicitly.
 */

const myAge = (yob) => 2024 - yob;

console.log(myAge(1990));

const happyBirthdayMsg = (yob,msg) => {
    const age = 2024 - yob;
    return `${msg} , you are now ${age}.`;
}

console.log(happyBirthdayMsg(1990,'Congratulations'));

/**
 * Function calling another function 
 */

function sub(x,y){
    return x-y;
}
function add(x,y){
    return x+y;
}
function displayNumbers(one,two){
    console.log(`Two numbers passes by the functions are ${one} and ${two}`);
}

displayNumbers(sub(3,5),add(5,7));


/**
 * Array : A special type of object that allows us to store a collection of values which can be of same or different datatype.
 * 
 * Creating array : 
 */

const arrayOne = ['Tarun', 1990 , 'Full-stack Developer'];

const arrayTwo = new Array('Hope',2022,'Software Developer');

console.log(arrayOne);

console.log(arrayTwo);


/**
 * Displaying data of array
 */

console.log(`My name is ${arrayOne[0]}.`);

/**
 * Get the lenght of an array
 */

console.log(`Array One length : 
${arrayOne.length}`);

/**
 * Getting last element of length
 */

console.log(`Last element in array two : ${arrayTwo[arrayTwo.length-1]}`);

/**
 * Updating an element of array 
 */

arrayTwo[1] = 2023;

console.log(arrayTwo);

/**
 * We can only update the elements of the array even if the array is declared using 'const' but we cannot update the entire array alltogeather
 * We can put another array inside an array.
 */



/**
 * Basic Array Operations / Methods
 * 
 */

const list = ['car','dog',1990,'Software Developer', true, ['hope','shimla',2022]];
console.log(list);

/**
 * push : add a new element at the end of array and in addition it returns the new lenght of the array.
 */

list.push('Tarun Chauhan'); 
console.log(list);

/**
 * unshift : add a new element at the begining of the array and in addition it returns the new length.
 */

list.unshift('A new list');
console.log(list);

/**
 * pop : remove the last element + return the removed element
 */

list.pop();

console.log(list);

/**
 * shift : remove the first element of the array + return the removed element
 */

list.shift();
console.log(list);

/**
 * indexOf : return the index of element
 */

console.log(list.indexOf(1990));


/**
 * includes (ES6 + ) : return true / false 
 */

console.log(list.includes(1990));

