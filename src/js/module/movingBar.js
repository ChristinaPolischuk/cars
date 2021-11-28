module.exports = () => {
    let $navLink = $('.nav__link'),
        $hoverEffect = $('.nav__link-hover'),
        width, height, left;
    $navLink.on('mouseenter', function () {
        let $self = $(this);
        width = $self.outerWidth();
        height = $self.outerHeight();
        left = $self.position().left;
        $hoverEffect.css({
            width: width + 'px',
            height: height + 'px',
            left: left + 'px',
            opacity: 1
        });
    });
    $navLink.on('mouseleave', function () {
        $hoverEffect.css({
            opacity: 0
        });
    });
}