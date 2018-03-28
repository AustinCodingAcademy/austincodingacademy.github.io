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
require('intl-tel-input');
require('jquery-ui.datepicker');
window.Cookies = require('js-cookie');
window.shajs = require('sha.js');
window._ = require('underscore');
window.moment = require('moment');

var campusKeys = {
  austin: {
    city: 'Austin',
    eventbriteId: 10937668459,
    googleCalendarId: 'austincodingacademy.com_32c8lk59hohrjrhrra080dgnuc@group.calendar.google.com',
    acronym: 'ACA'
  },
  sanantonio: {
    city: 'San Antonio',
    eventbriteId: 12423084089,
    googleCalendarId: 'austincodingacademy.com_jl117iian9r8ls03rn52qnf628@group.calendar.google.com',
    acronym: 'SACA'
  },
  dallas: {
    city: 'Dallas',
    eventbriteId: 12701002998,
    googleCalendarId: 'austincodingacademy.com_ru7uurqr2ba3nj2fqk35jp7kls@group.calendar.google.com',
    acronym: 'DCA'
  },
  houstontx: {
    city: 'Houston',
    eventbriteId: 13010327216,
    googleCalendarId: 'austincodingacademy.com_rmgbfhv4pr6uuvb5at1v0b1h74@group.calendar.google.com',
    acronym: 'HCA'
  }
};

$(function() {
  var campusKey = $('meta[name="campuskey"]').attr('content');
  if ($('.slick-carousel').length) {
    $('.slick-carousel').each(function() {
      $(this).slick({
        dots: $(this).data('dots') !== undefined ? $(this).data('dots') : true,
        arrows: $(this).data('arrows') !== undefined ? $(this).data('arrows') : true,
        infinite: true,
        speed: 300,
        slidesToShow: $(this).data('slides') || 1,
        autoplay: $(this).data('autoplay') !== undefined ? $(this).data('autoplay') : true,
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
  $.ajax('https://www.googleapis.com/calendar/v3/calendars/' + campusKeys[campusKey].googleCalendarId + '/events?fields=items(summary,id,location,start)&key=AIzaSyCAX77VQANnLhihivGILdowFLmqLjdy8c8', {
    // If API call is successful, run the callback funtion
    success: function(response) {
      // Create a list of items from the G.Maps API call, assign to mappedEvents
      const mappedEvents = response.items.filter(event => {
        return event.start && event.start.dateTime;
      }).map(function(event) {
        // 'Map' the response items in the list to the following key/value pairs
        return {
          "id": event.id,
          "title": event.summary ? event.summary : "",
          "url": 'https://calendar.google.com/calendar/event?eid=' + btoa(event.id + ' ' + campusKeys[campusKey].googleCalendarId) + '&ctz=America/Chicago',
          "class": "event-important",
          "start": moment.utc(event.start.dateTime).valueOf(),
          "end": ""
        }
      });

      // Grab the id of Bootstrap calendar, use the tmpl_path to __________, use mappedEvents as the listofevents/source for events_source
      $("#bootstrap-calendar").calendar({
        tmpl_path: "/assets/vendor/bootstrap-calendar/tmpls/",
        events_source: mappedEvents
      });
    }
  });

  // EVENTBRITE
  $.ajax('https://campus.austincodingacademy.com/api/terms/dates/56f368f58085ad1100f2ad77', {
    success: function(dates) {
      // GRAB EVERY CAMPUS' NEXT START DATE FROM CAMPUSDOT
      if (campusKeys[campusKey].city === 'Austin') {
        $('.start-date').html(`
          <small>Downtown</small>
          <br/>
          ${moment.utc(dates[campusKeys[campusKey].city]).format('ddd, MMM Do, YYYY')}
          <br/>
          <small>North / <a href="/remote">Remote</a></small>
          <br />
          ${moment.utc(dates['North Austin']).format('ddd, MMM Do, YYYY')}
        `);
        var first = moment.utc(dates[campusKeys[campusKey].city]) < moment.utc(dates['North Austin']) ? moment.utc(dates[campusKeys[campusKey].city]) : moment.utc(dates['North Austin']);
        $('.start-date-only').text(first.format('ddd, MMM Do'));
      } else {
        $('.start-date-only').text(moment.utc(dates['North Austin']).format('ddd, MMM Do'));
        $('.start-date').text(moment.utc(dates['North Austin']).format('ddd, MMM Do, YYYY'));
      }
    }
  });
  $.ajax('https://www.eventbriteapi.com/v3/organizers/' + campusKeys[campusKey].eventbriteId + '/events/?token=EFX5TSXYKK76RPDJSNBW&only_public=true&order_by=start_asc&start_date.range_start=' + moment.utc().subtract(1,'day').format(), {
    success: function(response) {
      var $upcomingEvents = $('<div class="row"></div>');
      response.events.slice(0, 7).forEach(function(event) {
        $upcomingEvents.append(`
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="panel">
              <div class="panel-body">
                <img src="${(event.logo) ? event.logo.url : ''}" class="img-responsive" style="width:100% !important;" alt="event image">
                <div class="media">
                  ${moment.utc(event.start.local).format('ddd, MMM Do, YYYY h:mma')} - ${moment.utc(event.end.local).format('h:mma')}
                  <div class="media-body">
                    <h4 class="media-heading">
                      <a href="${event.url}" target="_blank">${event.name.html}</a>
                    </h4>
                    ${event.description.text.slice(0, 200)}...
                    <br>
                    <a href="${event.url}" target="_blank">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)
      });
      $('#upcoming-events').html($upcomingEvents);
    }
  });

  $('.acronym').text(campusKeys[campusKey].acronym);

  $('[name="phone"]').each(function() {
    $(this).intlTelInput({
      onlyCountries: ['us'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js'
    });
    var $that = $(this);
    $(this).on('change', function() {
      $that.intlTelInput('setNumber', $that.val());
    });
  });

  $('.datepicker').datepicker({
    changeYear: true,
    changeMonth: true,
    yearRange: '1950:2017'
  });
  
});
