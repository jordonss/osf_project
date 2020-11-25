document.addEventListener("DOMContentLoaded", function () {

  //top slider carousel js

  const $topSliderCarousel = $('.slider-carousel.owl-carousel');

  $topSliderCarousel.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    animateOut: 'fadeOut'

  });

  $topSliderCarousel.trigger('refresh.owl.carousel');

  // featured items carousel js

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

  //login window js

  const $loginDisplay = document.querySelector('.login');
  const $loginWindow = document.querySelector('.login-window');
  const $headerLogin = document.querySelectorAll('.header-user-icon');

  $headerLogin.forEach(elem => elem.addEventListener('click', showLoginDisplay));

  $loginWindow.addEventListener('click', function (a) {
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

  //cookie window js

  window.addEventListener('load', cookieCheck);

  function cookieCheck() {
    const cookieData = document.cookie.split(';').filter(el => el.startsWith('isVisited=')).length;

    if (!cookieData) {
      const cookieWindow = document.querySelector('.cookie');
      cookieWindow.classList.add('cookie-visible');

      const closeCookie = document.querySelector('.cookie-window-close');
      closeCookie.addEventListener('click', function () {
        cookieWindow.classList.remove('cookie-visible');
      });

      const cookieAccept = document.querySelector('.cookie-window-accept');
      cookieAccept.addEventListener('click', function () {
        cookieWindow.classList.remove('cookie-visible');
        document.cookie = 'isVisited=true';
      })
    }
  }

  // whishlist and cart counter

  let itemCountWish = 0;

  $('.popular-item-button-fav').on('click', function () {
    itemCountWish++;
    $('.itemCountWish').html(itemCountWish).css('display', 'block');
  });

  let itemCountCart = 0;

  $('.popular-item-button-cart').on('click', function () {
    itemCountCart++;
    $('.itemCountCart').html(itemCountCart).css('display', 'block');
  });

  // load more AJAX

  $(".popular-load-more").on("click", function () {

    $.ajax({
      url: '../json/load-more.json',
      dataType: 'json',
      crossDomain: true,
      method: 'GET',
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          let item = `<div class="popular-list-item">
                        <a href="#" class="popular-list-item-link"><img src="${data[i].imgSrc}" alt=""></a>
                        <div class="popular-item-name">${data[i].itemName}</div>
                        <div class="popular-item-price">${data[i].itemPrice}</div>
                        <div class="popular-item-button-wrapper">
								          <button class="popular-item-button popular-item-button-cart"><i class="fa fa-plus" aria-hidden="true"></i></button>
							          	<button class="popular-item-button popular-item-button-fav"><i class="fa fa-heart" aria-hidden="true"></i></button>
							          </div>
                      </div>`;

          $(".popular-items-list").append(item);
        }
        let itemCountWish = 0;

        $('.popular-item-button-fav').on('click', function () {
          itemCountWish++;
          $('.itemCountWish').html(itemCountWish).css('display', 'block');
        });

        let itemCountCart = 0;

        $('.popular-item-button-cart').on('click', function () {
          itemCountCart++;
          $('.itemCountCart').html(itemCountCart).css('display', 'block');
        });
      }
    });

  });

// Category landing page AJAX

  $(".cls-load-more").on("click", function () {

    $.ajax({
      url: '../json/load-more.json',
      dataType: 'json',
      crossDomain: true,
      method: 'GET',
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          let item = `<div class="popular-list-item">
                        <a href="#" class="popular-list-item-link"><img src="${data[i].imgSrc}" alt=""></a>
                        <div class="popular-item-name">${data[i].itemName}</div>
                        <div class="popular-item-price">${data[i].itemPrice}</div>
                        <div class="popular-item-button-wrapper">
								          <button class="popular-item-button popular-item-button-cart"><i class="fa fa-plus" aria-hidden="true"></i></button>
							          	<button class="popular-item-button popular-item-button-fav"><i class="fa fa-heart" aria-hidden="true"></i></button>
							          </div>
                      </div>`;

          $(".popular-items-list").append(item);
        }
        let itemCountWish = 0;

        $('.popular-item-button-fav').on('click', function () {
          itemCountWish++;
          $('.itemCountWish').html(itemCountWish).css('display', 'block');
        });

        let itemCountCart = 0;

        $('.popular-item-button-cart').on('click', function () {
          itemCountCart++;
          $('.itemCountCart').html(itemCountCart).css('display', 'block');
        });
      }
    });

  });

});