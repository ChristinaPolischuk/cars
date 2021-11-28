module.exports = () => {
    $('.js-modified-cars-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.modified-cars-slider__btn--prev',
        nextArrow: '.modified-cars-slider__btn--next',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}