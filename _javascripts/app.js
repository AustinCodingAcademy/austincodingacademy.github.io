window.$ = window.jQuery = require('jquery');
require('bootstrap.button');
require('bootstrap.collapse');
require('bootstrap.dropdown');
require('bootstrap.modal');
require('bootstrap.transition');
require('slick-carousel');
require('jquery-match-height');

$(function() {
  if ($('.slick-carousel').length) {
    $('.slick-carousel').each(function() {
      $(this).slick({
        dots: $(this).data('dots') !== undefined ? $(this).data('dots') : true,
        arrows: $(this).data('arrows') !== undefined ? $(this).data('arrows') : true,
        infinite: true,
        speed: 300,
        slidesToShow: $(this).data('slides') || 1,
        autoplay: true,
        autoplaySpeed: $(this).data('autoplay-speed') || 10000,
        initialSlide: Math.floor(Math.random() * $(this).children().length),
        lazyLoad: 'ondemand'
      });
    });
    $('.slick-carousel .hidden, .slick-carousel.hidden').removeClass('hidden');
  }

  if ($('.equalizer').length) {
    $('.row-eq').each(function() {
      $(this).find('.equalizer').matchHeight();
    });
  }
});
