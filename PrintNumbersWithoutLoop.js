/**
 * Print numbers in java up to 10 without using loops

 */

function printNumbers(n){
  if(n<=10){
    console.log(n);
    printNumbers(n+1);
  }
}

printNumbers(1);