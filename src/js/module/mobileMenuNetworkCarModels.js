module.exports = () => {
    let trigger = $("#hamburger");
    let mobileNav = $("#mobile-nav");
    let isClosed = true;

    trigger.on("click", () => {
        if (isClosed == true) {
            trigger.removeClass("is-open");
            trigger.addClass("is-closed");
            mobileNav.addClass('is-open');
            isClosed = false;
        } else {
            trigger.removeClass("is-closed");
            trigger.addClass("is-open");
            mobileNav.removeClass('is-open');
            isClosed = true;
        }
    });

    $('body').on('click', '.mobile-list-dropdown', function () {
        let wrap = $(this).closest('.mobile-menu__item');
        $('.mobile-menu-dropdown', wrap).toggleClass('display_block');
        $('.icon', $(this)).toggleClass('icon-arrow-down');
        $('.icon', $(this)).toggleClass('icon-arrow-up');
    });
}
