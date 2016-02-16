//jQuery
// http://api.jquery.com/append/

$(function () {
  'use strict';



  $('.text-box').on('click', function () {
    $('<input type="text" class="text-box"/>').appendTo('.form-lists');
    // $('.form-lists').append('<input type="text" class="text-box"/>');
    // $('<input type="text" class="text-box"/>').clone().appendTo('.form-lists');
  });


});
