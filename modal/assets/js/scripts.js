$(function () {
  'use strict'; //better way to write js/use es5 to run jQuery

//pseudocode to change text on button and for the modal to pop up
//instead of declaring variables, just transverse through the DOM
// select the class button and using the click event listener, change the text on the button
// select the class modal container and add the show class


  $('.button').on('click', function () {
    $(this).text('CLICKED');
    $('.modal-container').addClass('showing');
  });

//pseudocode to close the modal
//select the class modal-x and the class modal container
//using the click event, remove the show class so the modal goes back to default display none

  $('.modal-x, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
  });

//pseudocode
//select the modal class, add a click event and create a function to stop propogation
// https://api.jquery.com/event.stoppropagation/

  $('.modal').click(function (event) {
    event.stopPropagation();
  });

});
