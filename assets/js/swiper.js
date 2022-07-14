const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  speed: 1000,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 'auto',
    }
  }
});