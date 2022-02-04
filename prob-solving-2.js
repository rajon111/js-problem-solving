//prob-1: Find out how much 'sumit' is repeated. And find out sumit first index number.
const sentance = 'Learn with sumit is all about teaching web development skills and techinique. sumit is my online teacher. His teaching tachniqe just amazing. Thanks! sumit dada'

let matches = sentance.match(/sumit/ig);
let matchLen = matches ? matches.length : 0;
let indexMatches = sentance.search(/sumit/i);
console.log(matchLen);
console.log(indexMatches);

/*prob-2: input:linearSearch(['a','b','c','d'],'c')
output: 2 or 'not found'
Implement the linearsearch function*/

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }

    }
    return 'not found';
}
console.log(linearSearch(['a', 'c', 'd', 'e'], 'c'));

//prob-3:prime number
function primeNumber(num) {
    count = 0;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log(num,'is prime number');
    }
    else {
        console.log(num,'not a prime number');
    }
}
primeNumber(30);


//prob-4:From an array find out the longest string and show the index num

function longestString(names){
    let longestWord= '';
    for(value of names){
        if(value.length %2 != 0){
            longestWord = value;
            return longestWord;
        }
    }
    

}
console.log(longestString(['raaaa','raa','hahahaha','dadadadadadada',]))