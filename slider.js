const cardsSwiper = new Swiper(".customers_container", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".customer__arrow prew",
      prevEl: ".customer__arrow next",
    },
  });