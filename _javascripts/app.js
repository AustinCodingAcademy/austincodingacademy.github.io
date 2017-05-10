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

    // Ajax call to all campus' Google Calendar API    
    $.ajax('https://www.googleapis.com/calendar/v3/calendars/austincodingacademy.com_32c8lk59hohrjrhrra080dgnuc@group.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyCAX77VQANnLhihivGILdowFLmqLjdy8c8', {
        // If API call is successful, run the callback funtion
        success: function(response) {
            // Create a list of items from the G.Maps API call, assign to mappedEvents
            const mappedEvents = response.items.map(function(event) {
                // 'Map' the response items in the list to the following key/value pairs
                return {
                    "id": event.id,
                    "title": event.summary ? event.summary : "",
                    "url": "",
                    "class": "event-important",
                    "start": event.start ? moment.utc(event.start.dateTime).valueOf() : "", 
                    "end": ""
                }
            });
            // Log the list of the newly formatted calendar events
            console.log(mappedEvents);

            // Grab the id of Bootstrap calendar, use the tmpl_path to __________, use mappedEvents as the listofevents/source for events_source
            $("#bootstrap-calendar").calendar({
                tmpl_path: "/assets/vendor/bootstrap-calendar/tmpls/",
                events_source: mappedEvents
            });
        }
    })

});
