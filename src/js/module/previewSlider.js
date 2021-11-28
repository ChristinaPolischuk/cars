module.exports = () => {

    $('.js-preview-slider').each(function (idx) {
        let previewSliderID = 'preview-slider-' + idx;
        this.closest('.preview-slider').id = previewSliderID;
        $(this).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '#' + previewSliderID + ' .preview-slider__btn--prev',
            nextArrow: '#' + previewSliderID + ' .preview-slider__btn--next',
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
                    breakpoint: 681,
                    settings: "unslick"
                }
            ]
        });
    });

    $(window).on('resize orientationchange', function() {
        $('.js-preview-slider').each(function () {
            if( $(window).width() > 680 &&  $(this).not('.slick-initialized')) {
                let previewSliderID = $(this).closest('.preview-slider').attr("id");
                $(this).slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '#' + previewSliderID + ' .preview-slider__btn--prev',
                    nextArrow: '#' + previewSliderID + ' .preview-slider__btn--next',
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
                            breakpoint: 681,
                            settings: "unslick"
                        }
                    ]
                });
            }
        });
    });
}