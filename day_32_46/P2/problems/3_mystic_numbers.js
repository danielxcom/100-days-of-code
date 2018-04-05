/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/
//basline spin-off : fizzbuzz

//nums we push reverse sequential.
//n % 4 or n % 6.

//Pattern: array creation - return at end loop.
//loop iteration. In reverse.
//
function mysticNumbers(max) {
  var array = [];

  for(var i = max - 1; i >= 4; i--) {
    if(i % 4 === 0 && i % 6 === 0) continue; //checking the instance in where BOTH are true
    //at the sametime. If true, skip.
    else if(i % 4 === 0 || i % 6 === 0) array.push(i);
  }

  return array;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mysticNumbers;
