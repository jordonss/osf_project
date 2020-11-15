document.addEventListener("DOMContentLoaded", function () {

  const $topSliderCarousel = $('.slider-carousel.owl-carousel');

  $topSliderCarousel.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    animateOut: 'fadeOut'

  });

  $topSliderCarousel.trigger('refresh.owl.carousel');

});