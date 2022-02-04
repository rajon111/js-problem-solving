const items =[10,20,30,40];

function myFun(value){
    return value*2;
}
const newItem = items.filter(myFun);
console.log(newItem);