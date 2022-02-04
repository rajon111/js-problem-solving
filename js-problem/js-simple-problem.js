/*var first =5;
var second =7;
console.log(first,second);
// var temp = first;
// first = second;
// second = temp;
// console.log(first,second);
[first,second] = [second,first];
console.log(first,second);*/
function findlarge(first, second, thired) {
    if ((first > second) && (first > thired)) {
        return first;
    } else if ((second > first) && (second > thired)) {
        return second;

    }
    else{
        return thired;
    }
}
var check = findlarge(20, 70 , 30);
console.log(check);