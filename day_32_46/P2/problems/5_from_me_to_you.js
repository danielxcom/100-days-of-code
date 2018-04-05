/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  var splitArr = sentence.split(' ');
  var trackMe = 'me';
  for(var i = 0; i < splitArr.length; i++) {
    if(splitArr[i] === trackMe) splitArr[i] = 'you';
  }
  var sentenceReturned = splitArr.join(' ');
  return sentenceReturned;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
