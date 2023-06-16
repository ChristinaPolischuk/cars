module.exports = () => {
  $(".js-tab-nav").on("click", function() {
		var $this = $(this);
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
		var $this = $(this);
		let activeTab = $(this).attr('data-tab');
		if (!$this.hasClass("active")) {
			$('.js-subtab-nav').removeClass('active');
			$('.js-subtab-content').slideUp();
		}
		$this.toggleClass("active");
		$(activeTab).slideToggle();
    return false;
	});
}