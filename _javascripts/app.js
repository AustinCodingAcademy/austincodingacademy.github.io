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
    //https://www.googleapis.com/calendar/v3/calendars/austincodingacademy.com_32c8lk59hohrjrhrra080dgnuc@group.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyCAX77VQANnLhihivGILdowFLmqLjdy8c8

    // Ajax call. Put my code into the success callback, line 47 $.ajax('https://www.googleapis.com/calendar/v3/calendars/austincodingacademy.com_32c8lk59hohrjrhrra080dgnuc@group.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyCAX77VQANnLhihivGILdowFLmqLjdy8c8', {
    //     success: function(response) {
    //         console.log(response.events);
    //     }
    // })

    $("#bootstrap-calendar").calendar({
        tmpl_path: "/assets/vendor/bootstrap-calendar/tmpls/",
        events_source: [{
                "id": 293,
                "title": "Event 1",
                "url": "http://example.com",
                "class": "event-important",
                "start": 1493660389512, // Convert date to Unix and include milliseconds => 000
                "end": 1493660389512 // Milliseconds
            },
            {
                "id": 294,
                "title": "Event 2",
                "url": "http://example.com",
                "class": "event-important",
                "start": 1493660389513, // Milliseconds
                "end": 1493660389513 // Milliseconds
            },
            {
                "id": 295,
                "title": "Event 3",
                "url": "http://example.com",
                "class": "event-success",
                "start": 1493660389514, // Milliseconds
                "end": 1493660389514 // Milliseconds
            },
            {
                "id": 296,
                "title": "Event 4",
                "url": "http://example.com",
                "class": "event-success",
                "start": 1493660389516, // Milliseconds
                "end": 1493660389516 // Milliseconds
            },
            {
                "id": 296,
                "title": "Event 5",
                "url": "http://example.com/",
                "class": "event-warning",
                "start": 1494331200000, // Milliseconds
                "end": 1494333000000
            },
            {
                "id": 256,
                "title": "Event that ends on timeline",
                "url": "http://example.com/",
                "class": "event-warning",
                "start": 1494428400000,
                "end": 1494428400000
            },
            {
                "id": 276,
                "title": "Short day event",
                "url": "http://example.com/",
                "class": "event-success",
                "start": 1494428400000,
                "end": 1494428400000
            },
            {
                "id": 294,
                "title": "This is information class ",
                "url": "http://example.com/",
                "class": "event-info",
                "start": 1363111200000,
                "end": 1363284086400
            },
            {
                "id": 297,
                "title": "This is success event",
                "url": "http://example.com/",
                "class": "event-success",
                "start": 1363234500000,
                "end": 1363284062400
            },
            {
                "id": 54,
                "title": "This is simple event",
                "url": "http://example.com/",
                "class": "event-special",
                "start": 1363712400000,
                "end": 1363716086400
            },
            {
                "id": 532,
                "title": "This is inverse event",
                "url": "http://example.com/",
                "class": "event-inverse",
                "start": 1364407200000,
                "end": 1364493686400
            },
            {
                "id": 548,
                "title": "This is special event",
                "url": "http://example.com/",
                "class": "event-special",
                "start": 1363197600000,
                "end": 1363629686400
            },
            {
                "id": 295,
                "title": "Event 3",
                "url": "http://example.com/",
                "class": "event-important",
                "start": 1364320800000,
                "end": 1364407286400
            }
        ]
    });
});
