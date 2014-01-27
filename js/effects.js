var starRunner = function(time) {
      setTimeout(function() {
        createStar();
        starRunner();
      }, randomFromInterval(500, 3000));
    },

    Star = function() {
        setTimeout(function() {
          var randomSize = randomFromInterval(1,5);
              star = $('<div>')
                .addClass('twinkle')
                .css({
                  'width': randomSize + 'px',
                  'height': randomSize + 'px',
                  'top': randomFromInterval(0,40) + '%',
                  'left': randomFromInterval(0,90) + '%',
                })
                .attr('id', randomFromInterval(0,999999999));

                $('body').append(star);
        }, randomFromInterval(0, 3000));
        return {};
    },

    randomFromInterval = function(from,to) {
        return Math.floor(Math.random()*(to-from+1)+from);
    }

// Make a lot of star mofos
for(x = 0; x <= 60; x++) {
  new Star();
}


