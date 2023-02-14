/*
let js = 'amazing';
console.log(40 + 8+  23 - 10);


console.log ('Jonas');
console.log(23);

let firstName = 'Matilda'

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name convetions
let jonas_matilda = 'JM'
let $funtcion = '27'

let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let country = 'Croatia'
let continent = 'Europa'
let population = '500000000'

console.log(country);
console.log(continent);
console.log(population);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23)
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
/*
let isIsland = false;
let language = 'portuguese';


const country = 'Croatia';
let continent = 'Europa';
let population = '11000000';
let popFinland = '6000000';
let descritpion = 'Portugal'

console.log(language);
console.log(isIsland);
console.log(country);
console.log(continent);
console.log(population / 2, population + 1);
console.log(population > popFinland);
console.log(description + ' ' + continent + ' ' + language + ' ' + population )
*/
/*
let asge = 30;
age = 31;

const birthYear = 1993;
//birthYear = 1990;

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x --;
x --;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >=18;

console.log (now - 1993 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log (now - 1991 > now - 2018);

let x, y; 
x = y = 25-10-5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)
*/
/*
let weightMark = 78;
let weightJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let markBmi = weightMark / heightMark ** 2;
let johnBmi = weightJohn / heightJohn ** 2;

let markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI)
*/
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas); 

const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`)
*/
/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license ');
}   else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

// let weightMark = 78;
// let weightJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;
/*
let weightMark = 95;
let weightJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

let markBmi = weightMark / heightMark ** 2;
let johnBmi = weightJohn / heightJohn ** 2;

let markHigherBMI = markBmi > johnBmi;

if (markHigherBMI) {
    console.log(`Marks BMI (${markBmi}) is higher than Johns!(${johnBmi})`)
} else {
    console.log(`Johns BMI (${johnBmi}) is higher than Marks!(${markBmi})`)
    */
// type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('JOnas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if(height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is undefined');
}
*/
/*
const age = 18;
if (age === 18) console.log('You just became an adult');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Amazing Number');
}   else if (favourite === 7) {
    console.log('7 cool number');
}   else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('why not 23');
*/

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);


// if(hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// }   else {
//     console.log('Someone else should drive...');
// }

// const isTired = false

// console.log(hasDriverLicense && hasGoodVision && isTired);

// if(hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// }   else {
//     console.log('Someone else should drive...');
// }

// let dolphinsScore = (96 + 108 + 89) / 3;
// let koalasScore = (88 + 91 + 110) / 3;

// if(dolphinsScore > koalasScore) {
//     console.log('Dolphins Win');
// }   else if (dolphinsScore < koalasScore){
//     console.log('Koalas Win');
// }   else if (dolphinsScore === koalasScore) {
//     console.log('Its a draw')
// }

// let dolphinsScore = (97 + 112 + 80) / 3;
// let koalasScore = (109 + 95 + 50) / 3;
// console.log( dolphinsScore, koalasScore);

// if(dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins Win');
// }   else if (koalasScore > dolphinsScore && koalasScore >100){
//     console.log('Koalas Win');
// }   else if (dolphinsScore === koalasScore && dolphinsScore >=100 && koalasScore >=100) {
//     console.log('Its a draw');
// }   else {
//     console.log('No one wins')
// }

// const day = 'thursday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//      break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//      break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//      break
//     case 'Friday':
//         console.log('Record videos');
//      break
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the weekend :D');
//      break
//     default:
//         console.log('Not a valid day!');
// }

//  const age = 23;
// //  age >= 18 ? console.log('I like to drink wine') : 
// //  console.log('I like to drink water');

//  const drink = age >= 18 ? 'wine' : 'water';
//  console.log(drink);

//  let drink2;
//  if(age >= 18) {
//     drink2 = 'wine';
//  }  else {
//     drink2 = 'water';
//  }

//  console.log(drink2);

//  console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// const totalValue =  bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`)


