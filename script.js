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

