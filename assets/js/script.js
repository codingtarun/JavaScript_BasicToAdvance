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


/**
 * Objects : Fundamental data type in javascript used to store & organize data.
 * 
 * key : value pair
 * 
 * property : value
 * 
 * data order doesn't matter
 * 
 */

const objOne = {
    name: 'Tarun Chauhan',
    yob: 1990,
    loaction: ['Gumma','Kotkhai','Shimla'],
    hasDriverLiscence : true,
    calAge : function(yob){
        return 2023 - yob;
    },
    calAge2: function(){
        return 2023 - this.yob
    }
};


console.log(objOne);

console.log(objOne.calAge(1990));
console.log(objOne.calAge2());
/**
 * Difference between Arrays & Objects : 
 * 
 * 1. An object is an unordered collection of key-value / property-value pair and array is an ordered, integer-indexed collection of value, index starting fom 0.
 * 2. Object access value : objOne.age / objOne['age] and Array access value : arrayOne[index],
 * 3. Object is used when we need to represent entities with properties, ex name,age etc and array is used when we need to access items using the position.
 * 4. Iteration in object : objOne.keys() / objOne.values() / objOne.entries() and in array : forEach(), map(), filter().
 * 
 * 
 */

/**
 * How to retrieve data from object
 */

console.log(`My name is ${objOne.name}.`);
console.log(`My YOB is ${objOne['yob']}`);


/**
 * Objects methods : 
 * 
 */

/**
 * Iteration : The For Loop
 */


for(var i = 0 ; i <= 10 ; i++){
    console.log(`1 X ${i} = ${1*i}`);
}


/**
 * Looping the arrays
 */

const loopArray = ['car','plane','house','phone','cycle','food'];

for(var i = 0 ; i < loopArray.length ; i++){
    console.log(loopArray[i]);
}

/**
 * Looping backward and Loop inside a loop
 */

for(var i = loopArray.length-1; i >= 0; i --){
    console.log(loopArray[i]);
}

for(var i = 1; i<=2; i ++){
    console.log(`Following is the table of ${i}`);
    for(var j = 1; j <= 10; j++ ){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}


/**
 * While loop 
 */

var x = 0;
while(x < 10){
    console.log(`Loop no ${x}`);
    x++;
}

/**
 * DOM manipulation
 */

/**
 * Guess The Number Game script
 * 
 * Steps 
 * 1. Reset Highscore , your score , input fields and messages when page loads.
 * 2. Generate a random number and store it in variable.
 * 3. Create variables and store the element instance.
 * 4. 
 */

/**
 * Initializing the DOM
 * 
 * 1. A const variable is declared
 * 2. 'document' object represents the entire HTML document.
 * 3. 'getElementById' method is a 'document' object that retrives the html element with the given ID.
 *  
 */

const textHighScore = document.getElementById('high-score');
const textYourScore = document.getElementById('your-score');
const inputInputNumber = document.getElementById('input-number');
var textGuessClue = document.getElementById('guess-clue');
const buttonCheckInput = document.getElementById('check-input');
const buttonResetGame = document.getElementById('reset-game');


/**
 * Get text content of the element
 */

console.log(textHighScore.textContent);
console.log(textYourScore.textContent);

/**
 * Set the text content
 */

textHighScore.textContent = 0;
textYourScore.textContent = 20;
textGuessClue.textContent = `Enter a number between 1 and 20`;

/**
 * Generate a random number and store it in a variable
 * 
 * using an arrow function to generate a random number
 */

const geneateRandomNumber = () => Math.floor(Math.random * 21); 

let randomNumber = geneateRandomNumber();

console.log(`Random Number : ${randomNumber}`);



// /**
//  * Handling a 'click' event
//  */

// checkInputButton.addEventListener('click',function(){
//     console.log(inputNumberInput.value);
//     if(!inputNumberInput.value){
//         guessClueText.textContent = `Enter value between 1 & 20.`;
//     }else{
//         if(inputNumberInput.value < 1 || inputNumberInput.value > 20){
//             guessClueText.textContent = `Enter value between 1 & 20.`;
//             inputNumberInput.value = '';
//         }else {
//             if(randomNumber > inputNumberInput.value){
//                 guessClueText.textContent = `Too Low!!!`;
//                 yourScoreText.textContent -- ;
//                 inputNumberInput.value = '';
//             }else if (randomNumber < inputNumberInput.value){
//                 guessClueText.textContent = `Too high!!!`;
//                 yourScoreText.textContent -- ;
//                 inputNumberInput.value = '';
//             }else if(randomNumber == inputNumberInput.value){
//                 guessClueText.textContent = `You won!!! Your socre is ${yourScoreText.textContent}`;
//                 if(highScoreText.textContent < yourScoreText.textContent){
//                     highScoreText.textContent = yourScoreText.textContent;
//                 }
//             }else {
//                 guessClueText.textContent = `Something wrong!!!`;
//                 inputNumberInput.value = '';
//             }
//         }
//     }
    
// });

// /**
//  * Reset button event handling
//  */
// resetGameButton.addEventListener('click',function(){
//     //highScoreText.textContent = 0;
//     yourScoreText.textContent = 20;
//     guessClueText.textContent  = "Enter a game between 1 to 20";
//     const randomNumber = generateRandomNumber();
//     console.log(`Random Number : ${randomNumber}.`);
// });


