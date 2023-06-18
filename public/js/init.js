var version = document.currentScript.getAttribute("attr-cache-version");

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

loadCss("/css/bootstrap.min.css?v=" + version);
loadCss(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
);
loadCss("/js/swiper/swiper-bundle.min.css");

requirejs.config({
    waitSeconds: 200,
    paths: {
        functions: "/js/functions.js?v=" + version,
        jquery: "/js/jquery/dist/jquery.min.js?v=" + version,
        swipejs: "/js/swiper/swiper-bundle.min.js?v=" + version,
    },

    shim: {
        functions: {
            deps: ["jquery"],
        },
        swipejs: {
            deps: ["jquery"],
        },
    },
});

//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery"], function ($) {
    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, { passive: true });
        },
    };

    $("body").on("submit", "form", function () {
        $(this).submit(function () {
            return false;
        });
        return true;
    });

    try {
        //we are not sure this function exists
        FooterFunctions();
    } catch (e) {}
});

require(["functions"], function () {
    try {
        window.addEventListener("scroll", InitializeMenuScroll);
    } catch (e) {
        console.log(e);
    }

    try {
        InitializeMenuScroll();
    } catch (e) {
        console.log(e);
    }
});

require(["swipejs"], function (Swiper) {
    //home-page NUMBER OF SLIDES
    try {
        hompageSwiper(Swiper);
    } catch (e) {}

    //SUPPLIERS CAROUSEL
    try {
        SwiperCarouselVendors(Swiper);
    } catch (e) {}

    //product-managment-vendor-gallery CAROUSEL
    var product_managment_vendor_gallery = new Swiper(
        ".product-managment-vendor-gallery",
        {
            direction: "horizontal",
            slidesPerView: 2.5,
            spaceBetween: 20,
            loop: false,
        }
    );

    //Home-page block slider 1
    // var swiper_3_1 = new Swiper(".home-page-block-slider-1", {
    //     direction: "horizontal",
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     loop: true,
    //     navigation: {
    //         nextEl: ".next-arrow-home-page-block-1",
    //         prevEl: ".prev-arrow-home-page-block-1",
    //     },
    //     autoplay: {
    //         delay: 3500,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination-block-slider-1",
    //         clickable: true,
    //     },
    // });

    //Home-page block slider 1
    // var swiper_3_2 = new Swiper(".home-page-block-slider-2", {
    //     direction: "horizontal",
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     loop: true,
    //     autoplay: {
    //         delay: 3500,
    //     },
    //     navigation: {
    //         nextEl: ".next-arrow-home-page-block-2",
    //         prevEl: ".prev-arrow-home-page-block-2",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination-block-slider-2",
    //         clickable: true,
    //     },
    // });

    //Home-page block slider 1
    // var swiper_3_3 = new Swiper(".home-page-block-slider-3", {
    //     direction: "horizontal",
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     loop: true,
    //     navigation: {
    //         nextEl: ".next-arrow-home-page-block-3",
    //         prevEl: ".prev-arrow-home-page-block-3",
    //     },
    //     autoplay: {
    //         delay: 3500,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination-block-slider-3",
    //         clickable: true,
    //     },
    // });

    //FIRST PRODUCTS CAROUSEL
    var i = 0;
    $(".product-slideshow-0").each(function () {
        var new_class = "swiper_product_0_" + i;
        $(this).addClass(new_class);
        var product_swipes = new Swiper("." + new_class, {
            direction: "horizontal",
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: false,
            autoHeight: true,
            breakpoints: {
                840: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    loop: true,
                    centeredSlides: false,
                },
                403: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: false,
                },
            },
            autoplay: {
                delay: 4000,
            },
            navigation: {
                nextEl: ".next-arrow-product-0",
                prevEl: ".prev-arrow-product-0",
            },
        });
    });

    //SECOND PRODUCTS CAROUSEL
    $(".product-slideshow-1").each(function () {
        var new_class = "swiper_product_1_" + i;
        $(this).addClass(new_class);
        var product_swipes = new Swiper("." + new_class, {
            direction: "horizontal",
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: false,
            autoHeight: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                840: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    loop: true,
                    centeredSlides: false,
                },
                403: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: false,
                },
            },
            navigation: {
                nextEl: ".next-arrow-product-1",
                prevEl: ".prev-arrow-product-1",
            },
        });
    });

    //THIRD PRODUCTS CAROUSEL
    $(".product-slideshow-2").each(function () {
        var new_class = "swiper_product_2_" + i;
        $(this).addClass(new_class);
        var product_swipes = new Swiper("." + new_class, {
            direction: "horizontal",
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: false,
            autoHeight: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                840: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    loop: true,
                    centeredSlides: false,
                },
                403: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: false,
                },
            },
            navigation: {
                nextEl: ".next-arrow-product-2",
                prevEl: ".prev-arrow-product-2",
            },
        });
    });

    //product variations CAROUSEL
    var product_managment_vendor_gallery = new Swiper(
        ".product-variations-carousel",
        {
            direction: "horizontal",
            slidesPerView: 2.5,
            spaceBetween: 10,
            loop: false,
            breakpoints: {
                476: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                },
            },
        }
    );

    var thumbnails = new Swiper(".thumbnails-slideshow", {
        direction: "horizontal",
        spaceBetween: 5,
        slidesPerView: 4,
        loop: false,
        breakpoints: {
            991: {
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            613: {
                slidesPerView: 7,
            },
        },
    });

    var checkQuantityFAQSections = $("#checkQuantityFAQSections").val();

    var filter_help_center = new Swiper(".filter-block-swiper", {
        direction: "horizontal",
        slidesPerView: 2,
        breakpoints: {
            1276: {
                slidesPerView: checkQuantityFAQSections,
            },
            931: {
                slidesPerView: 2,
            },
        },
        spaceBetween: 0,
        loop: false,
        grabCursor: true,
    });

    var vendor_menu = new Swiper(".vendor-menu-swiper", {
        direction: "horizontal",
        slidesPerView: 2,
        breakpoints: {
            1276: {
                slidesPerView: 4,
            },
            931: {
                slidesPerView: 2,
            },
        },
        spaceBetween: 0,
        loop: false,
        grabCursor: true,
    });

    var product_pagination_bullets = new Swiper(".product-pagination-bullets", {
        direction: "horizontal",
        slidesPerView: 3.7,
        spaceBetween: 20,
        loop: false,
        grabCursor: true,
        navigation: {
            nextEl: ".product-pagination-bullet-right",
            prevEl: ".product-pagination-bullet-left",
        },
    });
});
