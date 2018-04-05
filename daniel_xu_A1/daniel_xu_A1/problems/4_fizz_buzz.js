/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  var array = [];
  for(var i=0; i < max; i++) {
    //not inclusive max as it's "under" this number.
    if(i % 3 === 0 && i % 5 !== 0) {
      array.push(i);
    } else if(i % 5 === 0 && i % 3 !== 0 ) {
      array.push(i);
    }
  }
  return array;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
