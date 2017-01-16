$(document).ready(function(){
    var bigSlider = {
        loop:true,
        margin:18,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:2,
                dots:true
            },
            1024:{
                items:3,
                dots:true
            },
            1200:{
                items:4
            }
        }
    };
    $('.owl-our-designers').owlCarousel(bigSlider);
    var singleSlide = {
        loop:true,
        margin:18,
        items:1,
        nav:true,
        dots:true,
        responsive:{
            0:{
                nav:false,
            },
            600:{
                nav:true,
            }
        }
    };
    $('.owl-aboutSalonSlider').owlCarousel(singleSlide);
    var standart= {
        loop:true,
        margin:57,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    };
    $('.owl-sewing-curtains').owlCarousel(standart);
    $('.owl-made-curtains').owlCarousel(standart);

    $('.about-video .wrapp-video .poster').click(function(){
        $('.about-video .wrapp-video .poster').css({'display':'none'});
    });

    /* scroll-top */
    $('.footer-nav .up').click(function(){                      
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    /* input mask */
    $(".callback-area .form-block form .phone-input, #calculatePrice_popup #phone, .designer-pop__input-phone").mask("+7 (999) 999-99-99",{placeholder:"_"});


    $('#calculatePrice_popup').popup({
        transition: 'all .5s'
    });
})