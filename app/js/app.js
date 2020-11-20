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

  const $headerLogin = document.querySelectorAll('.header-user-icon');
  const $loginDisplay = document.querySelector('.login');
  const $loginWindow = document.querySelector('.login-window');

  $headerLogin.forEach(elem => elem.addEventListener('click', showLoginDisplay));

  $loginWindow.addEventListener('click', a => {
    a.stopPropagation();
  })

  function showLoginDisplay(a) {
    $loginDisplay.classList.add('login-visible');
    document.addEventListener('click', hideLoginDisplay);
    document.addEventListener('keydown', hideLoginDisplay);
    a.stopPropagation();
  }

  function hideLoginDisplay(a) {
    if (a.type === 'click' || a.keyCode === 27) {
      $loginDisplay.classList.remove('login-visible');
      document.removeEventListener('click', hideLoginDisplay);
      document.removeEventListener('keydown', hideLoginDisplay);
    }
  }

  const $togglePassButton = document.querySelector('.toggle-password-icon');

  $togglePassButton.addEventListener('click', togglePassword);

  function togglePassword() {
    const $passInput = document.querySelector('#userPassword');

    if ($passInput.type === 'password') {
      $passInput.type = 'text';
      $togglePassButton.classList.toggle('toggle-password-eye');
    } else {
      $passInput.type = 'password';
      $togglePassButton.classList.toggle('toggle-password-eye');
    }
  }

});