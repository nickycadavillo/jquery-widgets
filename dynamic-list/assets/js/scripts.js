//jQuery
// http://api.jquery.com/append/

$(function () {
  'use strict';



  $('#text-box').on('click', function () {
    $('.form-lists').append('<input type="text"/>');
  });


});
