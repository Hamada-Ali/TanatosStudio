$(function () {

	"use strict";

	// Trigger Nice Scroll Plugin
	$("html").niceScroll();

	// Resize Header
	$('header').height($(window).height());

		// centring .intro
		function translate(){

		var height 	     = $(window).height(); 
		var width      	 = $(window).width();
		var div_width  	 = $('header .intro').width();
		var div_height 	 = $('header .intro').height();
		var arrow_height = $('header .arrow').height();
		var arrow_width  = $('header .arrow').width();

		$('header .intro').css({

			left: (width / 2) - (div_width / 2),
			top: (height /2) - (div_height / 2)

		});

		$('header .arrow').css({

			left: (width / 2) - (arrow_width / 2),
			top: (height / 1.1)

	    });

	}
		translate();

		$(window).resize(function () {

			translate();

		});


	$('header .arrow i').on('click', function () {

		$('html, body').animate({

			scrollTop: $('.features').offset().top

		}, 1000);

	});

	// Show More Images
	$('.image-button').on('click', function () {

		$('.hidden').fadeToggle();
		$(this).Toggletext('Show Less');

	});

	// Control On Arrows
	var leftArrow = $('.chev .fa-chevron-left'),
		rightArrow = $('.chev .fa-chevron-right');
	function checkClient() {

		$('.testi:first-child').hasClass('active') ? leftArrow.fadeOut(100) : leftArrow.fadeIn(100);
		$('.testi:last').hasClass('active') ? rightArrow.fadeOut(100) : rightArrow.fadeIn(100);
	}

	// Show Or Hide .testi
	$('.Testimonials i').on('click', function () {

		if ($(this).hasClass('fa-chevron-right')){

		$('.testi.active').fadeOut(100, function () {

				$(this).removeClass('active').next('.testi').addClass('active').fadeIn();

				checkClient();

			});
		} else {

				$('.testi.active').fadeOut(100, function () {

				$(this).removeClass('active').prev('.testi').addClass('active').fadeIn();

				checkClient();

			});
		}
	});

	checkClient();

});