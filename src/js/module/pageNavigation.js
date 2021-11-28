module.exports = () => {
    let $navLink = $('.page-navigation__link'),
        $navLinkActive = $('.page-navigation__link.active'),
        $hoverEffect = $('.page-navigation__hover'),
        width = $navLinkActive.outerWidth(),
        height = $navLinkActive.outerHeight(),
        left = $navLinkActive.position().left;
    $hoverEffect.css({
        width: $navLinkActive.outerWidth(),
        height: $navLinkActive.outerHeight(),
        left: $navLinkActive.position().left
    });
    $navLink.on('mouseenter', function () {
        let $self = $(this);
        width = $self.outerWidth();
        height = $self.outerHeight();
        left = $self.position().left;
        $hoverEffect.css({
            width: width + 'px',
            height: height + 'px',
            left: left + 'px',
        });
    });
    $navLink.on('mouseleave', function () {
        $hoverEffect.css({
            width: $navLinkActive.outerWidth(),
            height: $navLinkActive.outerHeight(),
            left: $navLinkActive.position().left
        });
    });
}