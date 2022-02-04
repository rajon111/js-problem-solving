// function leapYear(year){
//     if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         // return true;
//         console.log(year + ' is a leap year');
//     }else {
//         console.log(year + ' is not a leap year');
//     }

//     // else false;
// }
// // var yearValue = leapYear(2024);
// // console.log(yearValue);
// const year = prompt('Enter a year:');
// leapYear(year);
// program to check leap year
/*function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
var isCheck = checkLeapYear(2024);
console.log(isCheck);*/
/* ..........factotial......
var factor = 1;
for (var i = 0; i <= 7; i++) {

    factor = factor * i;

}

console.log(factor);*/

// ...........functional factoraol.....

function getfectorial(number) {
    var factorial = 1;
    for (var i = 1; i < number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var check = getfectorial(40);
console.log(check);