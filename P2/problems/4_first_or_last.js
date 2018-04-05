/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:

- the first element if there is an even number of elements in the array

- the last element if there is an odd number of elemetns in the array

You can assume the array contains at least one element.

Examples:

firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

function firstOrLast(array) {
  if(even(array.length)) return array[0];
  return array[array.length-1];
}

function even(n) {
  return n % 2 === 0
}

//TA answer:

function firstOrLastV2(array) {
  if(array.length % 2 === 0) { //if we have even num of ele.
    return array[0];; //return first ele.
  } else { // else odd
    return array[array.length - 1]; // return last ele.
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstOrLast;
