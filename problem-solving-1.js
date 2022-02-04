//pro-1: 1-6 rendom number find

function findRendom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(findRendom(1, 6));

//pro-2: show studets name alphabetically


const fruits = ["Rajon", "Shawon", "Prince", "Nishad"];
console.log(fruits.sort());

//pro-3: show students roll-number serially

const roll = [12, 8, 2, 5, 4, 10, 7];
var rollOrder = roll.sort(function (a, b) { return a - b });
console.log(rollOrder);

//prob-4: leap-year check

function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 400 == 0) || (year % 100 != 0)) {
        console.log(year, 'This year is leapYear');
    } else {
        console.log(year, 'This year is Not leapYear');
    }
}
isLeapYear(2040);

//prob-5:How would you determine the number of vowels in a sentence?

/* let vowels =['A','E','I','O','U','a','e','i','o','u'];
let sentence = ["Bangladesh is a lovely conutry"];
  

 for(let i =0 ; i<=sentence.length; i++){
     if(vowels.includes(myArray[i])){
         console.log(myArray[i]);
     }
 }
 let myArray = sentence.split('');*/

const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function checkVowel(sentace) {
    count = 0;
    var latter = Array.from(sentace);
    latter.forEach(function (value) {
        if (vowel.includes(value)) {
            count++;
        }

    })
    return count;

}
console.log(checkVowel('PRACTICE makes a man Perfect'))
//or
let string = "Quick brown fox jumps over the leazy dog"
function vowelCheck(sentence) {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            count++;
        }

    }
    return count;
}
console.log(vowelCheck(string));

//prob-6: Find duplicate numbers from an array

const number = [2, 2, 4, 6, 8, 5, 9, 8, 9];

const duplicateNumber = number.filter(function (value, index, array) {
    return array.indexOf(value) !== index
});
console.log(duplicateNumber);

//or UNIQUE NAMES
const names = ['rajon', 'ornob', 'sojib', 'rafy', 'roky', 'rajon', 'roky']

function uniqueName(names) {
    const unique = [];
    for (const elements of names) {
        //console.log(elements);
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
    }
    return unique;
}
console.log(uniqueName(names));

//prob-7: Find uniqu number from an array

const numbers = [1, 6, 2, 8, 9, 2, 7, 9];

const uniquNum = numbers.filter(function (value, index, array) {
    return array.indexOf === index
})
//prob-8: How to reverse a string?

const greetngs = 'hello, how are you?'

function reverseString(text) {
    let reverse = '';

    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
console.log(reverseString(greetngs));

/*prob:9 Made a table,chair,bed . For table you need: 10cft/table , For chair you need: 3cft/chair ,
 For bed you need: 50cft/bed .  write a code for 6 chair , 1 bad and 2 table how much wood needed*/

function woodCalculation(chairWood, tableWood, bedWood) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;
    const forChair = chairWood * perChair;
    const forTable = tableWood * perTable;
    const forBed = bedWood * perBed;
    const totallWood = forChair + forTable + forBed;
    return totallWood;

}
console.log(woodCalculation(6, 2, 1));

//prob-10: Find the cheapest phone from an array

const phones = [
    { phone: 'xiomi', price: 1500 },
    { phone: 'nokia', price: 500 },
    { phone: 'poco', price: 1200 },
    { phone: 'vivo', price: 800 },
]
let chippest = phones[0];

for (let phone of phones) {
    if (phone.price < chippest.price) {
        chippest = phone;
    }
}
console.log(chippest);



