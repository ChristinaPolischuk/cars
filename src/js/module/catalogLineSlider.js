module.exports = () => {

    $('.js-catalog-line-slider').each(function (idx) {
        let catalogSliderID = 'catalog-line-slider-' + idx;
        this.closest('.catalog-line-slider').id = catalogSliderID;
        $(this).not('.slick-initialized').slick({
            infinite: false,
            centerPadding: '40px',
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '#' + catalogSliderID + ' .preview-slider__btn--prev',
            nextArrow: '#' + catalogSliderID + ' .preview-slider__btn--next',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 586,
                    settings: {
                      slidesToShow: 1
                  }
                }
            ]
        });
    });
}