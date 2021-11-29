module.exports = () => {
    if ($(".car-model__year").length > 3) {
        let carModelYear = $($(".js-car-model-year").get().reverse());
        carModelYear.each((index, el) => {
            if (index < 3) {
                $(el).addClass("always-show");
            }
        });
    }

    $('.js-show-years').on('click', function () {
        let yearsContainer = $(this).parent();
        let years = $($(this).siblings().get().reverse());

        yearsContainer.toggleClass("active");

        if($(this).parent().hasClass("active")) {
            $(this).html(`
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8L1 8" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 1L1 8L8 15" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `)
        } else {
            $(this).html(`
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8L15 8" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 1L15 8L8 15" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `)
        }
        years.each(function (index, el) {
            if (!$(el).hasClass('always-show')) {
                $(el).addClass('always-show');
            } else {
                if (index > 2) {
                    $(el).removeClass('always-show')
                }
            }
        })
    });
}