const favoriteSwiper = new Swiper('.favorite-swiper', {
    speed: 700,
    slidesPerView: 2,
    loop: false,
    spaceBetween: 30,
    grid: {
      rows: 2,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

const personalizedCoffeeSwiper = new Swiper('.personalized-coffee-swiper', {
  loop: false,
  speed: 700,
  slidesPerView: 3,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

document.querySelector('.tabs') ? installTabs() : null;