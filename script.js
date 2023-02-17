'use strict';

// let hasDriversLicense = false;
// const passTest = true

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037- birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// arrow

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }


// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(2000, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePIeces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePIeces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement; 
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1993, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // prvi test
// const scoreDolphins = calcAverage(0, 0, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     }   else if (avgKoalas >= 2 * avgDolphins) {
//         console.log (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     }   else {
//         console.log('No team wins...')
//     }
// }

// checkWinner (scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3= 'Peter';

// const friends = ['Michael', 'Steven', 'Peter']; 
// console.log(friends);

// const y = new Array(1993, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends); 

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // vjezba
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), (years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// // add elements
// const newLenght = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('john');
// console.log(friends);

// // remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')) {
//     console.log('You have a friend called peter');
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // arrow
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [123, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

// console.log(bills, tip, totals);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage (502, 150, 71);
// const scoreKoalas = calcAverage (65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//         if (scoreDolphins >= 2 * scoreKoalas) {
//         console.log(`Dolphins ${avgDolphins} Win  vs. Koalas ${avgKoalas} lose `)
//     }   else if (scoreKoalas >= 2 * scoreDolphins) {
//         console.log(`Koalas ${avgKoalas} win vs. Dolphins ${avgDolphins}`)
//     }   else {
//         console.log('No one wins...')
// }
// }

// checkWinner (scoreDolphins, scoreKoalas);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael' , 'Peter' , 'Steven']
// };
// console.log(jonas)

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('WHat do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }   else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = 'NestoNesto';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends ${jonas.friends}, and his best friend is called ${jonas.friends[0]}.`);
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael' , 'Peter' , 'Steven'],
    hasDriversLicense: true, 

    calcAge: function() {
        return 2037 - this.birthYear;
    },

    // calcAge: function() {
    //     this.age = 2037 - this.birthYear;
    // },

    challenge: function() {
        console.log(`${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has    ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `)
    }
};

console.log(jonas.challenge());
// console.log(jonas['calcAge'](1991));
*/

// const markMiller = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     massKg: 78,
//     heightCm: 1.69,
    
//     calcBmi: function() {
//        return this.massKg / this.heightCm ** 2;
               
//     }
// }


// const johnSmith = {
//     firstName: 'John',
//     lastName: 'Smith',
//     massKg: 92,
//     heightCm: 1.95,
     
//     calcBmi: function() {
//         return this.massKg / this.heightCm ** 2;
             
//     }
// }

// const markVsJohn = function (markBMI, johnBMI) {
//     if (markMiller.calcBmi() > johnSmith.calcBmi()) {
//        console.log(`${markMiller.firstName} ${markMiller.lastName}s BMI (${markBMI}) is higher than ${johnSmith.firstName} ${johnSmith.lastName} (${johnBMI}).`); 
// }   else if (johnSmith.calcBmi() > markMiller.calcBmi()) {
//         console.log(`${johnSmith.firstName} ${johnSmith.lastName} (${johnBMI}) is higher than ${markMiller.firstName} ${markMiller.lastName} (${markBMI})`);
// }
// }

// markVsJohn(markMiller.calcBmi(), johnSmith.calcBmi());

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael' , 'Peter' , 'Steven'],
//     true,
//     true
// ];

// const types = [];

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     // filling types array
//     // types[i] = typeof jonas [i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// //  continue and break
// console.log('---Only strings---')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---BREAK NUMBER---')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael' , 'Peter' , 'Steven'],
//     true
    
// ];

// // 5, 4, .... 0

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// // loop in looop 

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
//     }
// };

// while loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;

// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) {
//         console.log('You rolled a 6! ')
//     }
// }

// CODE CHALLENGE!!!

// const bills = [
//     22,
//     295,
//     176,
//     440,
//     37,
//     105,
//     10,
//     1100,
//     86,
//     52
// ]
// const tips = []
// const totals = []

// // const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

// for (let i = 0; i < bills.length;  i++ ) {
//     tips.push (bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2);
//     totals.push (tips[i] + bills[i]);
   
// }

// console.log(bills, tips, totals)

// const calcAverage = function(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     } 
//     return sum / arr.length;
// }

// console.log(calcAverage([56, 78, 7, 43, 23]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
