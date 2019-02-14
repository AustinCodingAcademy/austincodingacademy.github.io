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
require('jquery-match-height');
window.shajs = require('sha.js');
window.moment = require('moment');
window.Cookies = require('js-cookie');
require('javascript-detect-element-resize/jquery.resize.js');

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

  function equalize() {
    if ($('.equalizer').length) {
      $('.row-eq').each(function() {
        $(this).find('.equalizer').matchHeight();
      });
    }
  }

  equalize();

  if (campusKey === 'austin') {
    $.ajax('https://www.eventbriteapi.com/v3/organizers/10937668459/events/?token=EFX5TSXYKK76RPDJSNBW&only_public=true&order_by=start_asc&start_date.range_start=' + moment.utc().subtract(1, 'day').format(), {
      success: function (response) {
        var $upcomingEvents = $('<div class="row"></div>');
        response.events.slice(0, 7).forEach(function (event) {
          $upcomingEvents.append(`
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="panel">
              <div class="panel-body equalizer">
                <img src="${(event.logo) ? event.logo.url : ''}" class="img-responsive" style="width:100% !important;" alt="event image">
                <div class="media">
                  ${moment.utc(event.start.local).format('ddd, MMM Do, YYYY h:mma')} - ${moment.utc(event.end.local).format('h:mma')}
                  <div class="media-body">
                    <h4 class="media-heading">
                      <a href="${event.url}" rel="noopener noreferrer" target="_blank">${event.name.html}</a>
                    </h4>
                    ${event.description.text.slice(0, 200)}...
                    <br>
                    <a href="${event.url}" rel="noopener noreferrer" target="_blank">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)
        });
        $('#upcoming-events').html($upcomingEvents);
        equalize();
      }
    });
  }

  if ($('#scrollspy').length) {
    $('body').scrollspy({ target: '#scrollspy' });
    $('.nav-wrapper').height($('[data-spy="affix"]').height());
  }
});
