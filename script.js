
//---------------lecture 01--------------------
/*
let js = "amazing";
// console.log(40+8+23-10);

let firstName = "aritra";
console.log(firstName);
firstName = "ari";
console.log(firstName);
console.log(firstName);
// console.log(firstName);

// assignment 01


let country = "india";
let continent = "asia";
let population = "1.3 billion";

console.log(country);
console.log(continent);
console.log(population);

*/

//-------------lecture 02---------------

// // data types

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// //typeof value

// console.log(typeof javascriptIsFun);
// console.log(typeof 'aritra');
// console.log(typeof 21);

// javascriptIsFun = 'yes!';
// console.log(javascriptIsFun);

// /* undefined data type*/

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2021;
// console.log(year);
// console.log(typeof year);

// //-----------------------------------------

// // assignment 2

// let country = "india";
// let continent = "asia";
// let population = "1.3 billion";
// let isIsland = false;
// let language;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);


// -----------------------lecture 03-----------------

// let age = 30;
// age = 31;

// const birthYear = 2000 // it cannot be changed
// // const birthPlace; // it will give error because we cannot declare empty variables

// var job = 'web developer';
// job = 'android developer';

// var jobTwo;

//--------------------lecture 04 ------------------------

// const now = 2021

// const ageAritr = now - 2000;
// const ageJonas = now - 1991;

// console.log(ageAritr, ageJonas);

// console.log(ageAritr*2, ageAritr/10, 2**3); // 2 ** 3 means 2 to the power 3

// const firstName = 'aritra';
// const lastName = 'mukhopadhyay';

// console.log(firstName + ' ' + lastName);

// //assignment operators --
// let x = 10+5;
// x += 10; // x = x+10 = 25
// x *= 4; // x = x*4 = 100
// x++; // x= x+1 = 101
// x--; // x = x-1 = 100

// console.log(x);

// //comparision operator

// console.log(ageAritr > ageJonas); // other operator  >, <, <=, >=

// console.log(ageAritr >= 18);//true

//-----------------------lecture 05-------------------

// lecture 05 to lecture 21 covered in mac 

// ----lecture 22 ----------------------------

// // equality operators

// // === -> exactly equal -- strict equality operator --doesnot do type coercion.
// // == --> loose equality operator - does the type coercion.
// const age = 18
// if (age === 18)
// {
//     console.log('you just became an adult (strict)');
// }

// if (age == 18){
//     console.log('you just became an adult (loose)');
// }
// // in above both if statement will print the statement.
// const ageInString = '18'
// if (ageInString === 18)
// {
//     console.log('you just became an adult (strict)');
// }

// if (ageInString == 18){
//     console.log('you just became an adult (loose)');
// }
// // in second example only the codition with == will print the result.
// //generally dont use the == operator foe comparision.

// const fav = Number(prompt(`What is your favorite number:`));
// console.log(fav);

// // if (fav == 23) // '23' == 23
// // {
// //     console.log(`Cool! 23 is an amazzing numbner`);
// // }

// if (fav === 23) // '23' not equal to 23
// {
//     console.log(`Cool! 23 is an amazzing numbner`);
// }

// else if(fav === 9)
// {
//     console.log(`cool! 9 is also a cool number`);
// }

// else if (fav !== 78){
//     console.log(`its not 78`);
// }

// -----------lecture 23-24 ---------------
// //boolean logic - and,or,not
// const hasDriversLicence = true // a;
// const hasGoodVision = true; // b

// console.log(hasDriversLicence && hasGoodVision); // a and b
// console.log(hasDriversLicence || hasGoodVision); // a or b
// console.log(!hasDriversLicence); // not a




// const isTired = true;

// console.log(hasDriversLicence && hasGoodVision && isTired);

// if(hasDriversLicence && hasGoodVision && !isTired)
// {
//     console.log(`sarah is able to drive`);
// }
// else{
//     console.log(`someone else should drive`);
// }

//--------------coding challenge 03------------

//test data 01
// const dolphinScoreOne = 96;
// const dolphinScoreTwo = 108;
// const dolphinScoreThree = 89;
// const koalaScoreOne = 88;
// const koalaScoreTwo = 91;
// const koalaScoreThree = 110;


//test data 02
/*const dolphinScoreOne = 97;
const dolphinScoreTwo = 112;
const dolphinScoreThree = 101;
const koalaScoreOne = 109;
const koalaScoreTwo = 95;
const koalaScoreThree = 123;*/

// test data 03
// const dolphinScoreOne = 97;
// const dolphinScoreTwo = 112;
// const dolphinScoreThree = 101;
// const koalaScoreOne = 109;
// const koalaScoreTwo = 95;
// const koalaScoreThree = 106;

// const dolphinAverageScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;

// console.log(`average score of Team Dolphin = ${dolphinAverageScore}`);

// const koalaAverageScore = (koalaScoreOne+koalaScoreTwo+koalaScoreThree)/3;

// console.log(`average score of Team Koala = ${koalaAverageScore}`);

// const minimumScore = 100

// if ((dolphinAverageScore && koalaAverageScore) >= minimumScore)
// {
//     if (dolphinAverageScore > koalaAverageScore)
//     {
//         console.log(`Team Dolphin Wins`);
//     }
//     else if (dolphinAverageScore < koalaAverageScore)
//     {
//         console.log(`Team Koala Wins`);
//     }
//     else{
//         console.log(`its a draw`);
//     }
// }
// else
// {
//     console.log(`No team wins the trophy`);
// }

//---------------challenge  complete ---------------    

//

//--------------lecture 25 ---------------
//switch statement.

// const day = 'tuesday';

// switch (day) {
//     case 'monday':
//         console.log(`plan course structure`);
//         console.log(`go to coding meetups`);
//         break;
//     case 'tuesday':
//         console.log(`prepare videos`);
//         break;
//     case 'wednesday':
//     case 'thrusday' :
//         console.log(`write code examples`);
//         break;
    
//     case 'friday':
//         console.log(`record videos`);
//         break;
    
//     case 'saturday': 
//     case 'sunday':
//         console.log(`Enjoy the weekend :D`);
//         break;
//     default:
//         console.log(`not a valid day`);
//         break;
// }

// if (day === 'monday')
// {
//     console.log(`plan course structure`);
//     console.log(`go to coding meetups`);
// }
// else if (day === 'tuesday')
// {
//     console.log(`prepare videos`);
// }

// else if (day === 'wednesday' || day === 'thrusday')
// {
//     console.log(`write code examples`);
// }

// else if (day === 'friday')
// {
//     console.log(`record videos`);
// }

// else if (day === 'saturday' || day === 'sunday'){
//     console.log(`enjoy the weekend`);
// }
// else

// {
//     console.log(`not a valid day`);
// }

//----------lecture 26------------------------
