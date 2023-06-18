function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}



loadCss('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
loadCss('https://use.fontawesome.com/releases/v5.7.1/css/all.css');
loadCss('/js/owl.carousel/dist/assets/owl.carousel.min.css');
loadCss('/js/okaynav/dist/css/okayNav.min.css');
loadCss('https://fonts.googleapis.com/icon?family=Material+Icons');
loadCss('/js/jquery.fancybox/dist/jquery.fancybox.min.css');
// loadCss('/js/jquery.aos/dist/aos.css');
// <link rel="stylesheet" href="css/okayNav.css" media="screen">



requirejs.config({
    waitSeconds: 200,
    paths: {
        functions: "/js/functions",
        jquery:  "/js/jquery/dist/jquery.min",
        owl: "/js/owl.carousel/dist/owl.carousel.min",
        okaynav: "/js/okaynav/dist/js/jquery.okayNav-min",
        // arbitraryanchor: "/js/jquery.arbitrary-anchor/jquery.arbitrary-anchor",
        // blazy: "/js/blazy/blazy.min",
        // aos: "/js/jquery.aos/dist/aos",
        // sticky: "/js/jquery.sticky/jquery.sticky",
        fancybox: "/js/jquery.fancybox/dist/jquery.fancybox.min",
        // isotope: "/js/jquery.isotope/isotope.pkgd.min",
        // bridget: "/js/jquery.bridget/jquery-bridget"
    },
    shim: {
        functions:{
            deps: ['jquery','fancybox']
        },
        owl: {
            deps: ['jquery']
        },
        // arbitraryanchor: {
        //     deps: ['jquery']
        // },
        // aos: {
        //     deps: ['jquery']
        // },
        // blazy: {
        //     deps: ['jquery']
        // },
        // sticky: {
        //     deps: ['jquery']
        // },
        fancybox: {
            deps: ['jquery']
        },
        // isotope: {
        //     deps: ['jquery']
        // },
        // bridget:{
        //     deps: ['isotope','jquery']
        // }
    }
});

//Define dependencies and pass a callback when dependencies have been loaded
require(["jquery"], function ($) {
    //we initialize the navigation menu

    try{
        //we are not sure this function exists
        FooterFunctions();
    }catch (e) {

    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
});

require(["functions"],function(){
});


require(['owl'],function(owlCarousel){

    if($(".single-carousel").length>0) {

        var owl = $(".single-carousel")
        owl.owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            rtl: false,
            loop: true,
        });
        // owl.on('changed.owl.carousel', function(event) {
        //     bLazy.revalidate();
        // });
        // owl.on('initialized.owl.carousel', function(event) {
        //     bLazy.revalidate();
        // });
    }


    if($(".multi-carousel-4").length>0) {

        var owl2 = $(".multi-carousel-4")
        owl2.owlCarousel({
            items:4,
            autoplay: false,
            rtl: false,
            loop: false,
            // nav: true,
            // navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        });
        // owl.on('changed.owl.carousel', function(event) {
        //     bLazy.revalidate();
        // });
        // owl.on('initialized.owl.carousel', function(event) {
        //     bLazy.revalidate();
        // });
    }

});
//
// require(['sticky'],function(hcSticky){
//     if($('.right-sticky').length>0){
//         $('.right-sticky').hcSticky({
//             stickTo: '.page-maincontent-right',
//         });
//     }
// });
var okaynav;
require(['okaynav'],function(okayNav){
    okaynav = $('.okayNav').okayNav({
        parent : '', // will call nav's parent() by default
        toggle_icon_class : 'okayNav__menu-toggle',
        toggle_icon_content: '<i class="fas fa-ellipsis-v"></i>',
        align_right: true, // If false, the menu and the kebab icon will be on the left
        swipe_enabled: true, // If true, you'll be able to swipe left/right to open the navigation
        threshold: 50, // Nav will auto open/close if swiped >= this many percent
        beforeOpen : function() {}, // Will trigger before the nav gets opened
        afterOpen : function() {}, // Will trigger after the nav gets opened
        beforeClose : function() {}, // Will trigger before the nav gets closed
        afterClose : function() {}, // Will trigger after the nav gets closed
        itemHidden: function() {}, // Will trigger after an item moves to the hidden navigation
        itemDisplayed: function() {} // Will trigger after an item moves to the visible navigation
    });
    window.onresize =  okaynav.okayNav('recalcNav');
});

// require(['isotope'],function(Isotope){
//     require( [ 'bridget' ],
//         function( jQueryBridget ) {
//             // make Isotope a jQuery plugin
//             jQueryBridget( 'isotope', Isotope, $ );
//             // now you can use $().isotope()
//             if($('.grid').length>0) {
//                 $('.grid').isotope( {
//                     itemSelector: '.grid-item',
//                     percentPosition: true,
//                     masonry: {
//                         columnWidth: '.grid-sizer'
//                     }
//                 });
//             }
//         });
// });

require(['functions'],function(){
    try{
        NotificationFunction();
    }catch (e) {
    console.log(e);
    }
});
require(['fancybox'],function(){
    $.fancyConfirm = function( opts ) {
        opts  = $.extend( true, {
            title     : 'Are you sure?',
            message   : '',
            okButton  : 'OK',
            noButton  : 'Cancel',
            callback  : $.noop
        }, opts || {} );

        $.fancybox.open({
            type : 'html',
            src  :
                '<div class="fc-content">' +
                '<h3>' + opts.title   + '</h3>' +
                '<p>'  + opts.message + '</p>' +
                '<div class="text-right confirmation">' +
                '<a data-value="0" data-fancybox-close>' + opts.noButton + '</a>' +
                '<button data-value="1" data-fancybox-close class="rounded">' + opts.okButton + '</button>' +
                '</div>' +
                '</div>',
            opts : {
                animationDuration : 350,
                animationEffect   : 'material',
                modal : true,
                baseTpl :
                    '<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
                    '<div class="fancybox-bg"></div>' +
                    '<div class="fancybox-inner">' +
                    '<div class="fancybox-stage"></div>' +
                    '</div>' +
                    '</div>',
                afterClose : function( instance, current, e ) {
                    var button = e ? e.target || e.currentTarget : null;
                    var value  = button ? $(button).data('value') : 0;

                    opts.callback( value );
                }
            }
        });
    }
});


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'UA-51241056-6');
