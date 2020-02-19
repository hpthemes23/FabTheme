/*
Theme Name:     FabTheme
Version:        1.0
*/
/* DEMO 1 JS */
/* DEMO 1 AOS */
AOS.init();
/* END OF DEMO 1 AOS */
/* DEMO 1 TYPED */
$(document).ready(function(){
	var typed = new Typed('#typed', {
		strings: ['Responsive', 'Agency', 'Landing Page'],
		typeSpeed: 120,
		backSpeed: 0,
		fadeOut: true,
		smartBackspace: true,
		loop: true
	});
});
/* END OF DEMO 1 TYPED */
/* DEMO 1 OWL CAROUSEL */
$(document).ready(function () {
	$(".fabtheme-demo-1-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
});
$(document).ready(function(){
	$(".fabtheme-demo-1-owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
/* END OF DEMO 1 OWL CAROUSEL */
/* DEMO 1 COUNTER UP */
$(document).ready(function () {
	$('.count').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});
/* END OF DEMO 1 COUNTER UP */
/* DEMO 1 SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.fabtheme-demo-1-scrolltop:hidden').stop(true, true).fadeIn();
        $('#fabtheme-demo-1-navbar').addClass('solid');
    } else {
        $('.fabtheme-demo-1-scrolltop').stop(true, true).fadeOut();
        $('#fabtheme-demo-1-navbar').removeClass('solid');
    }
});
$(function(){
	$(".fabtheme-demo-1-scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".fabtheme-demo-1-thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});
/* END OF DEMO 1 SCROLL TOP */
/* DEMO 1 SMOOTH SCROLL */
$('.navbar-nav a, .mouse-down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 2000, 'easeInOutExpo');
    event.preventDefault();
});
/* END OF DEMO 1 SMOOTH SCROLL */
/* END OF DEMO 1 JS */