/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  var container = sentence.split(" ");
  var track = ['I', 'mine', 'my', 'me'];
  var newArr = [];
  for(var i = 0; i < container.length; i++) {
    if(track.indexOf(container[i]) === 0) {
      newArr.push('we');
    } else if(track.indexOf(container[i])===1) {
      newArr.push('ours');
    } else if(track.indexOf(container[i])===2) {
      newArr.push('our');
    } else if(track.indexOf(container[i])===3) {
      newArr.push('us');
    }else {
    newArr.push(container[i]);
  }
  }
  return newArr.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
