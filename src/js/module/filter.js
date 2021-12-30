module.exports = () => {
    $("body").on("click", ".js-filter", function () {
        $(this).toggleClass("active");
    });
}