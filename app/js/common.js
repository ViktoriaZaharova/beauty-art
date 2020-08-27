$('.main-header-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.main-command-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendDots: '.main-command-slider__nav',
    appendArrows: '.main-command-slider__nav',
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }
    ]
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});
