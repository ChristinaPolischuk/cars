module.exports = () => {
    $("body").on("click", ".footer__title", function () {
        if ($(window).width() <= 576) {
            $(this).parent().find(".footer__links").stop().slideToggle("slow");
        }
    });
    $(window).on("load resize orientationchange", function () {
        if ($(window).width() > 576) {
            $(".footer__title").each(function () {
                // $(this).off("click");
                $(this).next().removeAttr("style");
            });
        }
    });
}