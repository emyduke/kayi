




$(document).ready(function () {
    $(".sliderContainer").show();
    $('.sliderContainer').slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

        ]
    })


    // $('.sliderContainer').slick({
    //     dots: false,
    //     arrows: false,
    //     // dots: false,
    //     infinite: true,
    //     // speed: 300,
    //     // slidesToShow: 3,
    //     // adaptiveHeight: false,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     // cssEase: 'linear',
    //     centerMode: true,
    //     centerPadding: '100px',
    //     slidesToShow: 3,

    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 centerMode: true,
    //                 centerPadding: '80px',
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '60px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });


    $(".sliderItem").on('click', function() {
        bg = $(this).data("img");
        $("body").css("background-image", `url(${bg})`)
    })
})