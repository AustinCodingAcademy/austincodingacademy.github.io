window.$ = window.jQuery = require('jquery');
require('bootstrap.button');
require('bootstrap.collapse');
require('bootstrap.dropdown');
require('bootstrap.modal');
require('bootstrap.transition');
require('slick-carousel');
require('typed.js');

$(function() {
  if ($('.typed').length) {
    $('.typed').each(function() {
      $(this).typed({
        typeSpeed: 10,
        startDelay: 0,
        backSpeed: 10,
        backDelay: 3000,
        loop: true,
        showCursor: true,
        cursor: "|",
        stringsElement: $(this).find('.typed-strings')
      });
    });
    var $cursor = $('.typed-cursor:nth-child(2)');
    $cursor.prev().insertBefore($cursor);
    $cursor.addClass('pull-right');
  }
});
