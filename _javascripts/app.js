window.$ = window.jQuery = require('jquery');
require('bootstrap.affix');
require('bootstrap.button');
require('bootstrap.collapse');
require('bootstrap.dropdown');
require('bootstrap.modal');
require('bootstrap.scrollspy');
require('bootstrap.tab');
require('bootstrap.tooltip');
require('bootstrap.transition');
require('slick-carousel');
require('jquery.resize.js');
require('jquery-match-height');
require('bootstrap-calendar');
window._ = require('underscore');
window.moment = require('moment');

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
            $(this).find('.hidden').removeClass('hidden');
        });
    }

    if ($('.equalizer').length) {
        $('.row-eq').each(function() {
            $(this).find('.equalizer').matchHeight();
        });
    }
    
});
