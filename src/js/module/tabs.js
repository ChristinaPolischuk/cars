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
			$('.js-subtab-content').hide();
		}
		$this.toggleClass("active");
		// $(activeTab).slideToggle();
		$(activeTab).toggle();
    if($(".js-catalog-line-slider").length > 0) {
      console.log($(".js-catalog-line-slider").length);
      $(".js-catalog-line-slider").each(function() {
        $(this).slick("refresh");
      });
    }
    return false;
	});
}