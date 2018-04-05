/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var containerArray = [];

  //check
  var track;

  //create loop to iterate over idx needed to be checked.
  for(var i = 0; i < array.length; i++) {

    //Everytime we pass a loop cycle, track becomes array[i].
    //it will always be the element of the array at the CURRENT index.
    track = array[i];

    //VITAL: containerArray is what we're checking to see if it has duplicates.
    //So if indexOf comes back as a -1, we know that it did not find any element matching.
    //HOWEVER: next time we iterate through with a track, if that track has a number both
    //original array and container array contains, if clause doesn't even consider it.

    //So we only check uniques.
	if(containerArray.indexOf(track) < 0) {
		containerArray.push(array[i]);
    }
  }
  return containerArray;

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/



module.exports = unique;
