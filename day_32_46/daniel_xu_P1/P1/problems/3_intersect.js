/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

// function intersect(arr1, arr2) {
//   var resultArr = [];
//   var arrCompare1 = arr1;
//   var arrCompare2 = arr2;
//
//   for(var i = 0; i < arrCompare1.length + arrCompare2.length; i++) {
//     if(arrCompare1.indexOf(arrCompare2[i]) > -1) resultArr.push(arrCompare2[i]);
//   }
//
//   return resultArr;
// }

function intersect(arr1, arr2) {
  var common = [];

  //doesnt matter if we iterate over one or the other.

  for(var i = 0; i < arr1.length; i++) {
    var ele = arr1[i];

    //check if ele is inside of arr2.
    if (arr2.indexOf(ele) > -1) {
      common.push(ele);
    }

  }
  return common;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
