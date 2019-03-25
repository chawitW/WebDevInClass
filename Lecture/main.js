console.log('Hello man');
console.error('This is error');
console.warn('This is warning');

//alert('This is alert');
//variable: var, let, const
let age = 30;
console.log("age : " ,age);
console.log("age : " + 30);
console.log(30 + "cm.");
age = '45';
console.log(age);
console.log(30 + '40');
console.log('30' + 40);
let b = 1;
b++;
console.log(++b);
const name = 'John';
const height = 178;
const weight = 68.5;
const isCool = true;
const x = null;
const y = undefined;
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

//String
console.log('My name is' + name);
// string literal
console.log(`My name is also ${name}`); 
const hello = `My name is again also ${name}`;
console.log(hello.length)
console.log(hello.toUpperCase());
console.log(hello.substring(3,10).toUpperCase());
console.log(hello.split(' '));
 
//Array
const nums = new Array(1,2,3,4,5,6);
console.log(nums);
const fruits = ['apple', "orange", 10, true, 14.5, [1,2,3]];
console.log(fruits[5]);
fruits[6] = 'crazy';
console.log(fruits);
fruits.push('end');
console.log(fruits);
fruits.unshift('start');
console.log(fruits);
fruits.pop(); fruits.pop();
console.log(fruits);
console.log(Array.isArray(hello));
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('a'));

//Object literals
const person = {
    fname: 'Prayuth',
    lname: 'Jan-O-Cha',
    age: 29999999,
    hobbies: ['stupid', 'cheating', 'dump'],
    adress:{
        street: '102934 kldjf',
        city: 'Lost world',
        country: 'Kalaland'
    }   
}
console.log(person);
console.log(`${person.fname} (${person.age})`);
console.log('A Hobbies:' + person.hobbies[1]);
console.log('Street: ' + person.adress.street);

const {fname, lname} = person;
console.log(fname + ' ' + lname);
const {adress: {city}} = person;
console.log(`${fname} ${lname} (${city})`);

person.email = 'chawit.wan@gmail.com';
console.log(person);

//Array of objects
const todos = 
[{
    id:1,
text: 'Dental Appointment',
isCompleted: true
    },
    {
    id:2,
    text: 'Shopping for food',
    isCompleted: false
    },
    {
    id:3,
    text: 'Finish Web development homework',
    isCompleted: true  
}]

console.log(todos);

//JSON format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Loop
let i = 10;
let str = '';
while(i>0){
    str += `${i}`;
    i--;
}
console.log(str);

for(let i=0; i<todos.length; i++){
    console.log(`${i+1},${todos[i].text}`);
}

for(let todo of todos)
{
    console.log(todo.id + ' -- ' + todo.text);
}

// High-order funtions
todos.forEach( (todo, index) => {
    console.log(`${index+i}: ${todo.text}`);
})

const todoText = todos.map( todo => {
    return todo.text;
})

console.log(todoText);

const todoCompleted = todos.filter( function(todo) {
    return todo.isCompleted === true;
})

console.log(todoCompleted);
let abc = 40;
console.log(abc === '40');
console.log(abc == '40');

let b1;
const c1 = (b1 === undefined)? 0:b1; //short if
console.log(c1);

function addNums(num1=0, num2=0){
    return num1+num2;
}
console.log(addNums(5.10,50));

//Arrow funtion
const addNums2 = (num1,num2) => num1+num2;
console.log(addNums2(5,6));

//OOP
function Person(fname, lname, dob){
    this.fname = fname;
    this.lname = lname;
    // this.dob = dob
    this.dob = (dob == undefined)? new Date(): new Date(dob);

    this.getBirthYear = function() { return this.dob.getFullYear(); }
    this.getFullName = function() {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person('John','Wit', '5-Dec-199999');
console.log(p1);
console.log(p1.getFullName + ' ' + p1.getBirthYear());

class PersonC {
    constructor(firstname, lastname, dob){
        this.fname = firstname;
        this.lname = lastname;
        this.dob = (dob === undefined)?   new Date(): new Date(dob);
    }
    getBirthYear = () => { return this.dob.getFullYear(); }
    getFullName = ()  => {return `${this.fname} ${this.lname}`;
    }
}

const p2 = new PersonC('Prayuth', 'JanOCha', '15-Dec-189278'); 
console.log(p2);

//DOM -- Document Object Model
//console.log(window.alert());
console.log(window.document);

const form = document.getElementById('my-form');
console.log(form);
const container = document.querySelector('h1');
console.log(container);
container.innerHTML = 'Prayuth Child-o-mild'

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value + ' ' + emailInput.value);


    if (nameInput.value === '' || emailInput.value === ''){
        //alert('Input!! Motherfucker');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all gap motherfucker';

    }else{
    const li = document.createElement('li');
    const text = document.createTextNode(`${nameInput.value}:${emailInput.value}`);
    li.appendChild(text);
    //console.log(li);

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
    msg.innerHTML ='';
    }
}

