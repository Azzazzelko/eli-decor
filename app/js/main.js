'use strict'
;(function () {
  $(document).on('ready',function() {

    $("a.p-project").click(function() {
      $('.layout').fadeIn('fast');
      $('.projectSlider').slick('slickNext');
    });

    $("a.p-project").fancybox({
      maxWidth	: 800,
      minHeight   : 250,
      fitToView	: false,
      autoDimensions: 	true,
      autoResize: true,
      closeClick	: false,
      openEffect	: 'fade',
      closeEffect	: 'fade',
      beforeClose: function() {
        $('.layout').fadeOut('fast');
      }
    });

    var projectsSlider = {
      loop:true,
      nav:true,
      margin: 55,
      dots: true,
      responsive:{
        0:{
          items:1,
          nav: false
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    };

    var singleSlide = {
      loop:true,
      margin:18,
      items:1,
      nav:true
    };

    $('.owl-top_slider').owlCarousel(singleSlide);
    $('.owl-our_projects').owlCarousel(projectsSlider);

    $('.big_img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.projectSlider'
    });

    $('.projectSlider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '.big_img',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      ]
    });

    $('.navigation li').hover(function () {
      if($(this).next().hasClass('submenu-block')) {
        $(this).next().addClass('active');
      }
    }, function () {
      $(this).next().removeClass('active');
    });1

    $('.submenu-block').hover(function () {
      $(this).addClass('active');
    }, function () {
      $(this).removeClass('active');
    });

    $('.m-menu').click(function () {
      $('.m-menu-wrapper').slideToggle();
    })

    $('.m-menu-list li').click(function() {
      if($(this).next().hasClass('active')) {
        $(this).next().removeClass('active').slideUp();
      } else {
        $(this).next().addClass('active').slideDown();
      }
    });


    /* Slider */
    if ( $("#slider").length ){
      $("#slider").slider({
        orientation: "horizontal",
        range: "min"
      });
    }
  })
})();
