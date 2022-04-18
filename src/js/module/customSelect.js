module.exports = () => {
    $(document).on("click", ".js-custom-select-header", function () {
        const selectHeader = $(this);
        const select = selectHeader.parent();

        select.toggleClass("is-active");

        select.on("click", ".js-custom-select-item", function () {
            const dataValue = $(this).data("value");
            const text = $(this).text();
            selectHeader
                .attr("data-value", dataValue)
                .text(text)
                .parent().removeClass("is-active");
        });
    });
}