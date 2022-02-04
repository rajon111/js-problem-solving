//prob-1: ana to vori

function anaToVori(ana) {
    //error handling
    if (typeof ana != "number") {
        return "Please enter a valid number";
    } else if (ana <= 0) {
        return "Please enter more then 0";
    }
    let vori = ana / 16;
    return vori;
}
console.log(anaToVori('dhdh'));

//prob-2: Panda Cost calculation

function pandaCost(quantityOfSingara, quantityOfSoumcha, quantityOfJilapi) {
    //error handling
    if ((typeof quantityOfSingara != "number") || (typeof quantityOfSoumcha != "number") || (typeof quantityOfJilapi != "number")) {
        return "Please enter a valid number";
    }
    else if ((quantityOfSingara <= 0) || (quantityOfSoumcha <= 0) || (quantityOfJilapi <= 0)) {
        return "Please enter more then 0";
    }

    let perSingaraPrice = 7;
    let perSoumchaPrice = 10;
    let perJilapiPrice = 15;
    //totallSingaraPrice
    let totallSingaraPrice = perSingaraPrice * quantityOfSingara;
    //totallSoumchaPrice
    let toallSoumchaPrice = perSoumchaPrice * quantityOfSoumcha;
    //totallJilapiPrice
    let totallJilapiPrice = perJilapiPrice * quantityOfJilapi;
    //totallPrice
    let totallPrice = totallSingaraPrice + toallSoumchaPrice + totallJilapiPrice;
    return totallPrice;

}
console.log(pandaCost(3, "sgd", 7));

//prob-3:Picnic Budget calculation
// For first 100 person - 5000 tk per person
// For 2nd 100 person - 4000 tk per person
// For rest           - 3000 tk per person



function picnicBudget(number) {
    //Error handling
    if(typeof number != "number"){
        return "Please enter a valid quantity";
      }
      else if(number <= 0){
        return "Please enter a valid quantity";
      }
    let budget;
    if (number > 200) {
        let first100Bill = 100 * 5000;
        let second100Bill = 100 * 4000;
        let remainingBill = (number - 200) * 3000;

        budget = first100Bill + second100Bill + remainingBill;
    }
    else if (number > 100) {
        let firstBill = 100 * 5000;
        let remainingBill = (number - 100) * 4000;

        budget = firstBill + remainingBill;
    }
    else {
        budget = number * 5000;
    }
    return budget;
}
console.log(picnicBudget(201));


//prob-4: Return 1st odd name from an array

function oddFriend(names) {

    let oddName = '';
    for (value of names) {
        if (value.length % 2 != 0) {
            oddName = value;
            return oddName;
        }
    }
}
console.log(oddFriend(['saki', 'ryan', 'rocky', 'sayma']));