module.exports = () => {
  $('.js-model-slider').slick({
    slidesToShow: 2,
    slidesPerRow: 2,
    rows: 2,
    infinite: false,
    prevArrow: ".preview-slider__btn--prev",
    nextArrow: ".preview-slider__btn--next",
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  });
}