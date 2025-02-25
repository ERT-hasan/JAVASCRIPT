// iterative factorial
// function getfactorialIterative(num){
//     let i = 1;
//     let result = 1;
//     while( i <= num){
//         result *= i;
//         i++;
//     }
//     return result;
// }
//  console.log(getfactorialIterative(4)); 

//  function getFactorial(num){
//     console.log(`getFactorial called  for ${num}`)
//     if(num === 1 || num === 0) return 1;

//     return num * getFactorial(num-1);
//  } 
//  console.log(getFactorial(9));
function fibonacci(n) {
    if (n <= 0) return 0; // Base case: Fibonacci(0) is 0
    if (n === 1) return 1; // Base case: Fibonacci(1) is 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
