module.exports = () => {
    $(document).on('click', '.js-smooth-scroll', function (e) {
        e.preventDefault();
        smoothScroll($(this).attr('data-target'));
    });
}

function smoothScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}