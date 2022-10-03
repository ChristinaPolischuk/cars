module.exports = () => {
    $(document).on("click", ".js-site-select", function () {
        let siteSelect = $(this).closest(".site-select");
        siteSelect.toggleClass("active");
        $('html,body').animate({
            scrollTop: siteSelect.offset().top + siteSelect.height()
        }, 1000);
    });
}