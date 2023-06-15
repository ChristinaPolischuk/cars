module.exports = () => {
  $(".tab-nav__btn").on("click", function() {
		var $this = $(this);
		let activeTab = $(this).attr('data-tab');
		if (!$this.hasClass("active")) {
			$('.tab-nav__btn').removeClass('active');
			$('.tab-content').slideUp();
		}
		$this.toggleClass("active");
		$(activeTab).slideToggle();
    return false;
	});
}