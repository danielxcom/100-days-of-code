/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
  var container = [];

  if(max < 2) {
    return container;
  }

  for(var i = 0; i < max; i++) {
    if(i % 2 === 0 && i % 7 === 0) {
      continue;
    } else if (i % 2 === 0 || i % 7 === 0) {
      container.push(i);
    }
  }
  return container; //return values we need otherwise if we return it in for loop
  //we immediately return and break loop.
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fuzzBizz;
