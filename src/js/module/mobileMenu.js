module.exports = () => {
    let trigger = $("#hamburger");
    let mobileNav = $("#mobile-nav")
    let isClosed = true;
    let showDropdown =$("#show-dropdown")

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

    showDropdown.on("click", function (e) {
        e.preventDefault();
        $(this).next().slideToggle("slow");
    });
}
