module.exports = () => {
    if ($(window).width() <= 680) {
        $(".js-preview-slider").each((index, el) => {
            let previewSlide = $(el).children();
            if (previewSlide.length > 3) {
                previewSlide.each((index, el) => {
                    if(index > 3) {
                        $(el).addClass("hide");
                    }
                });
            }
        })
    }

    $(window).on("resize orientationchange", function () {
        if ($(window).width() <= 680) {
            $(".js-preview-slider").each((index, el) => {
                let previewSlide = $(el).children();
                if (previewSlide.length > 3) {
                    previewSlide.each((index, el) => {
                        if(index > 3) {
                            $(el).addClass("hide");
                        }
                    });
                }
            })
        } else  {
            $(".js-preview-slider").each((index, el) => {
                let previewSlide = $(el).children();
                previewSlide.each(function (index, el) {
                    $(el).removeClass("hide");
                });
            })
        }
    });

    $('.js-show-slides').on('click', function () {
        $(this).toggleText('Show more', 'Hide');
        let slides = $(this).closest('.preview-slider').find(".preview-slider__item");
        slides.each(function (index, el) {
            if ($(el).hasClass('hide')) {
                $(el).removeClass('hide');
            } else {
                if (index > 3) {
                    $(el).addClass('hide')
                }
            }
        })
    });

    $.fn.extend({
        toggleText: function (a, b) {
            return this.text(this.text() == b ? a : b);
        }
    });
}