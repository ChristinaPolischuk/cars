module.exports = () => {
    $("body").on("click", ".js-accordion", function () {
        $(this)
            .next().slideToggle()
            .end()
            .parent().toggleClass("active");
    });
}