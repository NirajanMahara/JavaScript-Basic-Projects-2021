// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// 🚀 Separation of Concerns -----------------------------------------------

// This is my first JavaScript code!

// logging The string inside of a console
console.log('Im in console: 🚀');

// 🚀 LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// 🚀 Variables -----------------------------------------------

// `var` keyword was used before in

// 🚀 VARIABLES - var, let, const
let age = 30;

let name = 'Nirajan';
console.log(name);

// 🚀 Naming JS Variables
// Cannot be a reserved keywords
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space ot hyphen (-)
// Are case-sensitive

// 🚀 Declaration of Variables -----------------------------------------------

// 🚀 Camel notation
// camelCase is a naming convention in which the first letter of each word in a compound word is capitalized,
// except for the first word.
let dateOfBirthInBs = '2059-10-15';
let dateOfBirthInAd = '2003-01-29';

// 🚀 Declaring variables in single line -----------------------------------------------
let age, sex;
let firstName = 'Nirajan', lastName = 'Mahara';

// 🚀 Modern best practice -----------------------------------------------
let phoneNumber = 9876543210;
let address = 'Nepal';

// 🚀 Constants -----------------------------------------------

// 🚀 let can be re-assigned, const can not
age = 31;

// let      => need to reassign variables
// const    => don't need to reassign variables

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// 🚀 Primitive Types (Value Types) -----------------------------------------------
// Primitive Types      &&      Reference Types
// 💥 String
// 💥 Number
// 💥 Boolean
// 💥 undefined
// 💥 null

let myFirstName = 'Nirajan'; // String Literal
let myAge = 20; // Number Literal
let isPassed = 'True'; // Boolean Literal [true, false]

// 🔴 undefined
let MyLastName;
// OR, explicitly defining
let myLastName = undefined;

// 🚫 null
let myMiddleName = null;

// 🚀 DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Nirajan Mahara';
const age = 20;
const rating = 8.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// 🚀 Check type of data(variables)
console.log(typeof z);

// 🚀 Dynamic Typing -----------------------------------------------
// Change the type of variable on the runtime
// based on values assigned
name = 10;
typeof name;


// 🚀 STRINGS -----------------------------------------------

// 🚀 Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// 🚀 Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;

// Get length
val = s.length;

// Change case
val = s.toUpperCase();
val = s.toLowerCase();

// Get sub string
val = s.substring(0, 5);

// Split into array
val = s.split('');

// 🚀 OR -----------------------------------------------
const tags = 'javascript, programming, language';

// Split into array
val = s.split(', ');

// 🚀 Reference Types -----------------------------------------------

// 🚀 OBJECT LITERALS

let person = {
    Name: 'Nirajan',
    Age: 20
};

console.log(person);

// Dot Notation (Recommended for easy use)
person.pName = 'Ninja';
console.log(person.Name)

// Bracket Notation (Has it's own use)
person['Age'] = 100
console.log(person['Age']);

// Has it's own use
let selection = 'Name';
person[selection] = 'Samurai';
console.log(person[selection]);

// 🚀 OR  - another OBJECT LITERALS

const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],   // array inside object
    address: {                                // object inside object
      street: 'Broadway and 7th Avenue',
      city: 'New York',
      country: 'USA'
    }
  }

// Get single value
console.log(person.firstName)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'john@gmail.com';


// 🚀 Array of objects

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with family',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);

// 🚀 Format as JSON
console.log(JSON.stringify(todos));

// 🚀 Arrays -----------------------------------------------

// 🚀 ARRAYS - Store multiple values in a variable - any dataType

const arr = new Array('list1','list2', 99, true);
console.log(arr);

let colors = [];    // initialize => Empty array Literal

const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0 index
console.log(fruits[1]);

// Add value to the 4th index
fruits[4] = 'blueberries';

// Add value using push() to the very end
fruits.push('strawberries');

// Add to beginning of the array
fruits.unshift('mangos');

// Remove last value from the array
fruits.pop();

// // 🚀 Check if array
console.log(Array.isArray(fruits));

// // 🚀 Get index
console.log(fruits.indexOf('oranges'));




// 🚀 LOOPS 

// 🚀 For
for(let i = 0; i < 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// 🚀 While
let i = 1
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// 🚀 Loop Through Arrays
// 🚀 For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// 🚀 For...of Loop
for(let todo of todos) {
  console.log(todo.text);
}


// 🚀 HIGH ORDER ARRAY METHODS (show prototype)

// 🚀 forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// 🚀 map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// 🚀 filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});


// 🚀 CONDITIONALS

// 🚀 Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// 🚀 Switch
color = 'green';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'green':
    console.log('color is green');
    break;
  case 'blue':
    console.log('color is blue');
    break;
    default:  
    console.log('color is not red or green or blue (RGB)')
}

// 🚀 Ternary operator / Shorthand if condition ?then :else
const z = color === 'red' ? 10 : 20;



// 🚀 FUNCTIONS
function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}


// 🚀 => ARROW FUNCTIONS
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


// 🚀 OOP paradigm (Object-Oriented)

// 🚀 Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor

  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// 🚀 Instantiate an object from the class
const person1 = new Person('Nirajan', 'Bikram', '30-7-2001');
const person2 = new Person('Nirajan', 'Mahara', '29-1-2003');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// 🚀 Built in constructors
const name = new String('Ninja');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// 🚀 ES6 CLASSES (ECMAScript 2016/ ES6) => JavaScript Specification
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());


// 🚀 ELEMENT SELECTORS

// 🚀 Single Element Selectors
console.log(document.getElementById('my-form'));    // sec. recommended
console.log(document.querySelector('.container'));  // pri. recommended

// 🚀 Multiple Element Selectors
console.log(document.querySelectorAll('.item'));    // recommended
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// 🚀 MANIPULATING THE DOM (Document Object Model)
const ul = document.querySelector('.items');

// remove .items
ul.remove();

// remove last element of ul in .items
ul.lastElementChild.remove();

// change the text on first element of ul(.items) child
ul.firstElementChild.textContent = 'Hello';

// change the innerText of children with index: 1
ul.children[1].innerText = 'Brad';

// change the innerHTML of the lastElement of ul child
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// MANIPULATION background STYLE OF THE .btn class
const btn = document.querySelector('.btn');
btn.style.background = 'red';


// 🚀 EVENTS

// 🚀 Mouse Event => onClick
btn.addEventListener('click', e => {
  e.preventDefault();   // Prevent default refresh of the form
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// 🚀 Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// 🚀 USER FORM SCRIPT

// 🚀 Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// 🚀 Listen for form submit
myForm.addEventListener('submit', onSubmit);

// 🚀 handling function
function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');  // alert on window
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields value - at the end of onSubmit function
    nameInput.value = '';
    emailInput.value = '';
  }
}