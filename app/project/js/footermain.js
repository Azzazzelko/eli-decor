$(document).ready(function(){var o={loop:!0,margin:18,nav:!0,dots:!1,responsive:{0:{items:1,dots:!0},600:{items:2,dots:!0},1024:{items:3,dots:!0},1200:{items:4}}};$(".owl-our-designers").owlCarousel(o);var e={loop:!0,margin:18,items:1,nav:!0,dots:!0,responsive:{0:{nav:!1},600:{nav:!0}}};$(".owl-aboutSalonSlider").owlCarousel(e);var s={loop:!0,margin:57,nav:!0,dots:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}};$(".owl-sewing-curtains").owlCarousel(s),$(".owl-made-curtains").owlCarousel(s);var a={loop:!0,margin:30,nav:!0,dots:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}};$(".owl-our-curt").owlCarousel(a);var l={loop:!0,margin:30,nav:!0,items:1};$(".owl-partners").owlCarousel(l),$(".about-video .wrapp-video .poster").click(function(){$(".about-video .wrapp-video .poster").css({display:"none"})}),$(document).on("scroll",function(){$(window).scrollTop()>200?$(".footer-nav .up").addClass("show"):$(".footer-nav .up").removeClass("show")}),$(".footer-nav .up").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(".callback-area .form-block form .phone-input, #calculatePrice_popup #phone, .designer-pop__input-phone").mask("+7 (999) 999-99-99",{placeholder:"_"}),$("#showList").click(function(){$(".listShow").toggle("slow",function(){})}),$("#calculatePrice_popup").popup({transition:"all .5s"})});