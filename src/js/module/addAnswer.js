module.exports = () => {
    $(".js-add-answer").on("click", function() {
        $(this).next().slideToggle();
    });
}