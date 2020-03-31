var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        draggable: true,
    },
    slidesPerView: 4,
    mousewheel: true,
    spaceBetween: 10,
    simulateTouch: false,
    breakpoints: {
        1024: {
            scrollbar: {
                snapOnRelease: true
            },
            slidesPerView: 1,
            spaceBetween: 0,
            simulateTouch: true,
        }
    }
});