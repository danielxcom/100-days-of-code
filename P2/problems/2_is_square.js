/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/
//Strat: Figure what is / what isn't perfect square.
//Pattern: Check up to n number, check if 1 * 1 === 25;
// 2 * 2 === 25;
//  3 * 3...
//4 * 4....
//5 * 5 === 25;

//alt example.
//isSquare(7)
//1 * 1.... 3* 3... no hits thusfar... 6 * 6...
// we determine no num up to seven  returns itself after *.

//Pattern: Utilize Loop, Check Condition, Return true once, break.
//else return false.

//baseline similiar to isPrime.
//to be a square num we must find the i such that i * i = n;

function isSquare(number) {
  for(var i = 0; i < number; i++) {
    if( number / i === i) { //alt i * i === number. Return true;
      return true;
    }
  }
  return false; //return false after loop.
  //if inside loop, may return false WAY too early. Checking 2 * 2,
  //if its not case return false BEFORE we come upon 4 * 4 forr 16.

  //check ALL possible i's in loop.
  //THEN if we havent found it, return false.
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isSquare;
