$('.featured__block').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,

    responsive: {
        // breakpoint from 0 up
        640: {
            items: 2,
        },
        846: {
            items: 3
        },
        1170: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});