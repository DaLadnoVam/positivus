let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// const swiper = new Swiper('.case-swiper', {
//     loop: true,
//     slidesPerView: 3,
    
//     // Responsive breakpoints
//     breakpoints: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 1.5,
//         spaceBetween: 20
//       },
//       // when window width is >= 640px
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 0
//       }
//     }
    
// });