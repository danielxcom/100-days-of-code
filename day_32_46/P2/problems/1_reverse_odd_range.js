/*******************************************************************************
Write a function reverseOddRange(start, end) that returns an array containing all
odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
loop to do this.

Examples:

reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
reverseOddRange(3, 7) => [ 7, 5, 3 ]
reverseOddRange(9, 5) => []
*******************************************************************************/
//spin-off of classic range problem.
//all odd nums in reverse order. Inclusive.
//return arr.

function reverseOddRange(start, end) {
  var containerArray = [];

//we want reverse order, i = end.
//go down to start, i--.
//smaller and smaller i--.
//consider odds then push i.

  for(var i = end; i >= start; i--) {
    if(i % 2 !== 0) containerArray.push(i);
  }
//return desired result, array.
  return containerArray;
}

//for all problems, get baseline, see what goes on top of it.
//Pattern: get a container array;
//use a for loop with some condition to push into empty array.
//return array.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseOddRange;
