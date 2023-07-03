module.exports = () => {
  $(".js-tab-nav").on("click", function() {
		let $this = $(this);
		let activeTab = $(this).attr('data-tab');
		if (!$this.hasClass("active")) {
			$('.js-tab-nav').removeClass('active');
			$('.js-tab-content').slideUp();
		}
		$this.toggleClass("active");
		$(activeTab).slideToggle();
    return false;
	});

  $(".js-subtab-nav").on("click", function() {
		let $this = $(this);
		let activeTab = $(this).attr('data-tab');
		if (!$this.hasClass("active")) {
			$('.js-subtab-nav').removeClass('active');
			// $('.js-subtab-content').slideUp();
			$('.js-subtab-content').fadeOut();
		}
		$this.toggleClass("active");
		// $(activeTab).slideToggle();
		$(activeTab).fadeToggle();
    if($(".js-catalog-line-slider").length > 0) {
      $(".js-catalog-line-slider").each(function() {
        $(this).slick("refresh");
      });
    }
    return false;
	});
}