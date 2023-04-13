module.exports = () => {
    let yearsRightBtn = `<button class="car-model__btn js-show-years">
                            <svg class="icon icon-arrow-right car-model__icon">
                                <use xlink:href="/markups/network_car_models/img/sprite/symbol/sprite.svg#arrow-right"></use>
                            </svg>
                        </button>`;

    let yearsLeftBtn = `<button class="car-model__btn js-hide-years">
                            <svg class="icon icon-arrow-right car-model__icon">
                                <use xlink:href="/markups/network_car_models/img/sprite/symbol/sprite.svg#arrow-left"></use>
                            </svg>
                        </button>`;


    if ($('.car-model__years .js-car-model-year').length) {
        if ($('.car-model__years .js-car-model-year').length <= 3) {
            $('.car-model__years .js-car-model-year').addClass('always-show');
        } else {
            yearsShowLess();
            $('.car-model__years').append(yearsRightBtn);
        }
    }

    function yearsShowLess() {
        let len = $('.car-model__years .js-car-model-year').length;

        $('.car-model__years .js-car-model-year').each(function(i){
            if (i > len - 4) {
                $(this).addClass('always-show');
            } else {
                $(this).removeClass('always-show');
            }
        });
    }

    $('.car-model__years').on('click', '.js-show-years', function () {
        $('.car-model__years .js-car-model-year').addClass('always-show');
        $(this).remove();
        $('.car-model__years').append(yearsLeftBtn);
    });

    $('.car-model__years').on('click', '.js-hide-years', function () {
        $(this).remove();
        yearsShowLess();
        $('.car-model__years').append(yearsRightBtn);
    });
}