module.exports = () => {
    $(".js-show-search-form").on("click", () => {
        $(".search-form").addClass("opened");
    });
    $(".js-hide-search-form").on("click", () => {
        $(".search-form").removeClass("opened");
    });
}