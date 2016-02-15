//using JavaScript
// declare variables and select the id of the textarea and also the character count
// add event listener input for the textarea element
// create a function that calculates the characters remaining maybe using .length???


var textarea = document.getElementById('text-area');
var characterCount = document.getElementById('char-count');

textarea.addEventListener('input', function () {
  characterCount.innerHTML = (500 - this.value.length) + " characters remaining";
});




// $(function(){
//   'use strict';
//
//   $('textarea[maxlength]').next('.char-count')
//
// });
