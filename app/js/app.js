document.addEventListener("DOMContentLoaded", function () {

  const $topSliderCarousel = $('.slider-carousel.owl-carousel');

  $topSliderCarousel.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    animateOut: 'fadeOut'

  });

  $topSliderCarousel.trigger('refresh.owl.carousel');

  const $homePageFeaturedCarousel = $('.featured-list.owl-carousel');

  $homePageFeaturedCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    margin: 30,
    items: 1,
    autoplayHoverPause: true,
    navContainerClass: 'featured-arrow',
    navClass: ['featured-arrow-prev', 'featured-arrow-next'],
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 3,
        slideBy: 3
      },
      992: {
        items: 4,
        slideBy: 4
      }
    }
  })

});