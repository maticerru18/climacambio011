const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});