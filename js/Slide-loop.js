const swiper = new Swiper('.swiper', {
    loop: true,  // Enable infinite loop
    autoplay: {
      delay: 1000, // Slide transition interval (in milliseconds)
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,  // Enable clickable pagination
    },
    navigation: {
      nextEl: '.main-slider-button-next',
      prevEl: '.main-slider-button-prev',
    },
  });
  