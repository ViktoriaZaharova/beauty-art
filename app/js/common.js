$(document).ready(function() {
    $('.main-header-slider .main-header-slider__bg').eq(0).addClass('active').fadeIn(1000);
    $('.logo-slider .logo-slider__img').eq(0).addClass('active').fadeIn(1000);

    setInterval('blockAnimate();', 3000);
});


function blockAnimate() {
    var length = $('.main-header-slider .main-header-slider__bg').length - 1;
    $('.main-header-slider .main-header-slider__bg').each(function(index) {
        if($(this).hasClass('active') && index !== length) {
            $(this).removeClass('active').fadeOut(1000).next('.main-header-slider__bg').addClass('active').fadeIn(1000);
            return false;
        } else if (index === length) {
            $(this).removeClass('active').fadeOut(1000);
            $('.main-header-slider .main-header-slider__bg').eq(0).addClass('active').fadeIn(1000);
            return false;
        }
    });

    var length2 = $('.logo-slider .logo-slider__img').length - 1;
    $('.logo-slider .logo-slider__img').each(function(index) {
        if($(this).hasClass('active') && index !== length2) {
            $(this).removeClass('active').fadeOut(1000).next('.logo-slider__img').addClass('active').fadeIn(1000);
            return false;
        } else if (index === length2) {
            $(this).removeClass('active').fadeOut(1000);
            $('.logo-slider .logo-slider__img').eq(0).addClass('active').fadeIn(1000);
            return false;
        }
    });
};

// включить на странице, где есть этот блок
// $(document).scroll(function () {
//     if ($(this).scrollTop() <= ($(".main-header-top").offset().top - $(window).height())) {
//         $('.main-top-navigation').addClass('fixed');
//     } else {
//         $('.main-top-navigation').removeClass('fixed');
//     }
// });
//
// $(function(){
//     $nav = $('.main-top-navigation');
//     $window = $(window);
//     $h = $nav.offset().top;
//     $window.scroll(function(){
//         if ($window.scrollTop() > $h) {
//             $nav.addClass('fixed');
//         } else {
//             $nav.removeClass('fixed');
//         }
//     });
// });
// включить на странице, где есть этот блок

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

$('.users-service-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendDots: '.users-service-slider__nav',
    appendArrows: '.users-service-slider__nav',
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
                dots: false,
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
