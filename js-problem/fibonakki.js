// /* const fibo =[0,1];
// for(let i=2; i<=10;i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];

// }
//   console.log(fibo);*/

//   function fiboNcchi(num){

//     const fibo =[0,1];
//     for(let i=2;i<num;i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];

//     }
//     return fibo;
//   }
//   console.log(fiboNcchi(14)); 
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(count == 'a'){
    count++;
  }
} 
console.log(count)

