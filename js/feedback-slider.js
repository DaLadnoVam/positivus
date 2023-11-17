$('.feedback__slider').slick({
    centerMode: true,
    variableWidth: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });