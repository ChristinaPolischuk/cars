module.exports = () => {
    if($(".js-read-more").length == 0) return false;
    var max = 430;
    $(".js-read-more").each(function () {
        var str = $(this).text();
        if ($.trim(str).length > max) {
            var subStr = str.substring(0, max);
            var hiddenStr = str.substring(max, $.trim(str).length);
            $(this).empty().html(subStr);
            $(this).append('<span class="read-more">Read more</span>');
            $(this).append('<span class="add-text">' + hiddenStr + '</span>');
        }
    });
    $(".read-more").click(function () {
        $(this).siblings(".add-text").contents().unwrap();
        $(this).remove();
    });
}