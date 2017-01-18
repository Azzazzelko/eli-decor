'use strict'
;(function () {
  $(document).on('ready',function() {

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

    $('.big-curtains-slider__big_img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.big-curtains-slider__projectSlider'
    });
    $('.big-curtains-slider__projectSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.big-curtains-slider__big_img',
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


    /* header and footer */
    $('.navigation li').hover(function () {
      if($(this).next().hasClass('submenu-block')) {
        $(this).next().addClass('active');
      }
    }, function () {
      $(this).next().removeClass('active');
    });

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

      var sliderMin = parseInt( $("#slider").attr("data-min") ), //значение дата-атрибута мин
          sliderMax = parseInt( $("#slider").attr("data-max") ); //значение дата-атрибута макс

          $("#slider").slider({
            range: true,
        min: sliderMin,                    // минимум слайдера
        max: sliderMax,                    // максимум слайдера
        values: [ sliderMin, sliderMax ],
        slide: function( event, ui ) {
          $("#slider-amount").text(ui.values[0] + " ₽ - " + ui.values[1]+" ₽");  //показываем изменение слайдера 
        }
      });

      $("#slider-amount").text(sliderMin + " ₽ - " + sliderMax+" ₽");   //изначальные значения с дата атрибутов
    };

    /* filter-reset */
    $('.sidebar-reset-filter').on("click", function(e){
      e.preventDefault();
      var $this = $(this);
      var sliderMin = parseInt( $("#slider").attr("data-min") ),
      sliderMax = parseInt( $("#slider").attr("data-max") );

      $this.parent().find("input").removeAttr("checked");

      $("#slider").slider({
        values: [ sliderMin, sliderMax ]
      });
      $("#slider-amount").text(sliderMin + " ₽ - " + sliderMax+" ₽");
    });

    /* datepicker */
    if ($.datepicker) {
      $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
      };
      $.datepicker.setDefaults($.datepicker.regional['ru']); //локализация

      var dateNow = new Date();
      $('#datepicker').datepicker();
      $('#datepicker').datepicker('setDate', dateNow);

      $('.datepicker-next').click(function () {   //кнопка след. день
        var $picker = $("#datepicker");
        var date = new Date($picker.datepicker('getDate'));
        date.setDate(date.getDate()+1);
        $picker.datepicker('setDate', date);
        return false;
      });

      $('.datepicker-prev').click(function () {   //кнопка пред. день
        var $picker = $("#datepicker");
        var date = new Date($picker.datepicker('getDate'));
        date.setDate(date.getDate()-1);
        $picker.datepicker('setDate', date);
        return false;
      });
    };

    /* select */
    if ($('select').length) {
      $('select').select2();
    };

    /* Замена имени и картинки при клике на кнопку дизайнера */
    var designersBtn = $(".designers-button");
    var designersModal = $(".designer-pop-up");

    designersBtn.on("click", function(e){
      var $this = $(this);

      var imgSrc = $(this).siblings('.designers-img-container').find("img").attr("src");
      // var name = $(this).parent().siblings('.designers-description-block').find(".designers-description-name").text();
      var name = $(this).parent().parent().find(".designers-description-name").text();

      designersModal.find(".designer-pop__designer-name").text(name);
      designersModal.find(".designer-pop__img").attr("src", imgSrc);
    });

    /* Для кастомных модалок, не бутовых */
    var modals = (function(){

      var innerModal = $(".inner-modal");           //Внутренние модалки
      var openButtons = $("[data-my-pop='true']");  //Кнопки с дата атрибутом, открывающие внутренние модалки.

      var init = function(){
        setUpListeners();
      };

      var setUpListeners = function(){
        innerModal.on("click", closePopup);
        openButtons.on("click", thatWillBeOpen);
      };

      function thatWillBeOpen(e){   //открываем модалку по Хрефу.
        e.preventDefault();

        var $this = $(this);
        var href = $this.attr("href");

        openPopup(href);
      };

      function openPopup(target) { 
        $(target).fadeIn(200);
        $(target).css("visibility", "visible");
      };

      function closePopup(e) {
        var $target = $(e.target);

        if ($target.hasClass('inner-modal') || $target.attr('data-my-pop-close')) {
          innerModal.fadeOut(200);
        }
      };

      return {
        init:init
      }
    }());

    $(document).ready(function(){
      modals.init();
    });

  })
})();
