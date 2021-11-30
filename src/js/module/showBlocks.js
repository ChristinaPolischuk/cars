module.exports = () => {

    $(window).on("load resize orientationchange", function () {
        if($(window).width() > 576) {
            if($(".articles__item").length > 5) {
                $(".articles__item").each((index, el)=>{
                    if(index < 6) {
                        $(el).addClass("always-show");
                    }
                });
            }
        } else {
            if($(".articles__item").length > 5) {
                $(".articles__item").each((index, el)=>{
                    if(index < 2) {
                        $(el).addClass("always-show");
                    }
                });
            }
        }
    });

    $('.js-show-more').on('click', function () {
        $(this).toggleText('Show more', 'Hide');
        let articlesItems = $(this).closest('.articles').find(".articles__item");
        articlesItems.each(function (index, el) {
            if (!$(el).hasClass('always-show')) {
                $(el).addClass('always-show');
            } else {
                if (index > 5) {
                    $(el).removeClass('always-show')
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