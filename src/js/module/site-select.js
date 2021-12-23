module.exports = () => {
    $("body").on("click", ".js-site-select", function () {
        $(this)
            .toggleClass("active")
            .next().slideToggle("slow");
    });
}