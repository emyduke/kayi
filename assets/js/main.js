
$('.carousel').slick({
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