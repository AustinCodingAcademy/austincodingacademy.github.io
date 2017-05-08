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

    // Google Calendar API    
    $.ajax('https://www.googleapis.com/calendar/v3/calendars/austincodingacademy.com_32c8lk59hohrjrhrra080dgnuc@group.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyCAX77VQANnLhihivGILdowFLmqLjdy8c8', {
        success: function(response) {
            const mappedEvents = response.items.map(function(event) {
                return {
                    "id": event.id,
                    "title": event.summary ? event.summary : "",
                    "url": "",
                    "class": "event-important",
                    "start": event.start ? moment.utc(event.start.dateTime).valueOf() : "", 
                    "end": ""
                }
            });
            console.log(mappedEvents);

            // Bootstrap calendar
            $("#bootstrap-calendar").calendar({
                tmpl_path: "/assets/vendor/bootstrap-calendar/tmpls/",
                events_source: mappedEvents
            });
        }
    })

});
