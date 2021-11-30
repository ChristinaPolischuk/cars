module.exports = () => {

    $(window).on("load resize orientationchange", function () {
        if ($(window).width() > 768) {
            if ($(".card.hide").length > 0) {
                $(".card").each(function () {
                    $(this).removeClass("hide");
                });
            }
        } else {
            if ($(window).width() > 576) {
                $(".cards").each(function () {
                    let cardItem = $(this).children(".card");
                    if (cardItem.length > 3) {
                        cardItem.each(function (index) {
                            if (index > 3) {
                                $(this).addClass("hide");
                            } else {
                                $(this).removeClass("hide");
                            }
                        });
                        console.log(cardItem.length);
                    }
                    if (cardItem.length > 4) {
                        $(this).find(".js-cards-show-more").show();
                    } else {
                        $(this).find(".js-cards-show-more").hide();
                    }
                });
            } else {
                $(".cards").each(function () {
                    let cardItem = $(this).children(".card");
                    if (cardItem.length > 2) {
                        cardItem.each(function (index) {
                            if (index > 2) {
                                $(this).addClass("hide");
                            }
                        });
                    }
                    if (cardItem.length > 3) {
                        $(this).find(".js-cards-show-more").show();
                    } else {
                        $(this).find(".js-cards-show-more").hide();
                    }
                });
            }
        }
    });

    $('.js-cards-show-more').on('click', function () {
        $(this).toggleText('Show more', 'Hide');
        let cardItem = $(this).siblings(".card");
        cardItem.each(function (index) {
            if ($(this).hasClass('hide')) {
                $(this).removeClass('hide');
            } else {
                if ($(window).width() > 576 && index > 3) {
                    $(this).addClass('hide');
                } else if ($(window).width() <= 576 && index > 2) {
                    $(this).addClass('hide');
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