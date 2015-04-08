$(document).ready(function() {
  $portfolioLeft = $('.portfolio-left');
  $portfolioRight = $('.portfolio-right');
  $portfolioImage = $('.portfolio-image').children('img');

  // scaleOnHover($portfolioLeft, $portfolioImage, '101%');
  // scaleOnHover($portfolioRight, $portfolioImage, '101%')
});

var scaleOnHover = function(object, objectScaled, size) {
  object.hover(
    function() {
      $(this).children(objectScaled).animate({
        'width': size,
        'height': size
      }, 300)
    },
    function() {
      $(this).children(objectScaled).animate({
        'width': '100%',
        'height': '100%'
      }, 300)
    }
  );
}