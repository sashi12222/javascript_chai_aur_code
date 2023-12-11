// primitive data types

// 7 types :String,Number,Boolean,null,undefined,Symbol,BigInt

const score = false
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 353493048340893403984309n



//Reference (non primitive )
//Array , Objects,Functions

const heroes = ["sashi", 'spiderman', 'batman'];
let myObj={
    name: 'sashi',
    age: 21,
    
}

const myFunction = function () {
    console.log("hello sashi");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp)
console.log(typeof myFunction);


// memory
// stack memory=> use primitvie data type ,heap memory => use non primitive

let myClassroom = "CSE-b"
let anothername = myClassroom

anothername = "cse-a"
console.log(myClassroom);
console.log(anothername);

let user = {
    email: "user@google.com",
    upi:"uer#ybl"
}
let userTwo = user

userTwo.email = "sashi@gmail.com"
console.log(user.email)
console.log(userTwo.email);
