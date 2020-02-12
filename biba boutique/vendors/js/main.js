/*========Loader js===========*/
$(window).on('load', function () {
	$(".loader").slideUp("slow");
	$("body").addClass("animate");
	$("html").addClass("animate");
});

/* ======== Return to top ========== */

$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').scrollTop(0);
});


/* ============= Navbar White =========*/
$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});
	$(document).ready(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});

	setTimeout(function () {
		$('.navbar-brand').addClass('animate');
	}, 1000);
	setTimeout(function () {
		$('.navbar-nav li ').addClass('animate');
	}, 1100);
});


/* ============= Services Slider =========*/
$(document).ready(function () {
	'use strict';
	$('.slider').slick({
		autoplay: false,
		prevArrow: $(".slick-arrow-left"),
		nextArrow: $(".slick-arrow-right"),
		infinite: true,
		speed: 1000,
		autoplaySpeed: 1000,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		responsive: [{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					centerMode: false,
				}
			},

		]
	});
});

/* ============= Testimonial Slider =========*/

$(document).ready(function () {
	'use strict';
	$('#testimonial .testimonial-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 4000,

		speed: 1000,
		cssEase: 'ease-in-out',
		fade: true,
		responsive: [{
			breakpoint: 992,
			settings: {

			}

		}]
	});
});
/* ============= products Gallary =========*/
$(window).on('load', function () {
	'use strict';
	var $container = $('.productsdiv');
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: true,
			layoutMode: 'fitRows'
		}
	});
	$('.filter ul li a').on('click' , function () {
		$('.filter .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');


		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				queue: true
			}
		});

		return false;
	});

});
/* ============= Date Picker =========*/
$(document).ready(function () {
	'use strict';
	$("#datepicker").datepicker({
		autoclose: true,
		todayHighlight: true
	}).datepicker('update', new Date());
});

/* ============= Custom Select Picker=========*/
$(document).ready(function () {
	'use strict';
	$("select").each(function () {
		'use strict';
		var $this = $(this),
			numberOfOptions = $(this).children("option").length;

		$this.addClass("select-hidden");
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text(
			$this
			.children("option")
			.eq(0)
			.text()
		);

		var $list = $("<ul />", {
			class: "select-options"
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this
					.children("option")
					.eq(i)
					.text(),
				rel: $this
					.children("option")
					.eq(i)
					.val()
			}).appendTo($list);
		}

		var $listItems = $list.children("li");

		$styledSelect.on('click' , function (e) {
			e.stopPropagation();
			$("div.select-styled.active")
				.not(this)
				.each(function () {
					$(this)
						.removeClass("active")
						.next("ul.select-options")
						.hide();
				});
			$(this)
				.toggleClass("active")
				.next("ul.select-options")
				.toggle();
		});

		$listItems.on('click' , function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass("active");
			$this.val($(this).attr("rel"));
			$list.hide();
			//console.log($this.val());
		});

		$(document).on('click' , function () {
			$styledSelect.removeClass("active");
			$list.hide();
		});
	});
});
/* =============Hero Slider =========*/
$(document).ready(function () {
	'use strict';

	var interleaveOffset = 0.5;
	var swiperOptions = {
		loop: true,
		speed: 1000,
		parallax: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
				}
			},
			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function (speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-inner").style.transition =
						speed + "ms";
				}
			}
		}
	};

	var swiper = new Swiper(".swiper-container", swiperOptions);


	// SWIPER CAROUSEL
	var $swiper = $(".swiper-carousel");
	var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
	var $bottomSlideContent = null; // Slide content that gets passed between the  
	var mySwiper = new Swiper(".swiper-carousel", {
		spaceBetween: 0,
		slidesPerView: 2,
		centeredSlides: true,
		roundLengths: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		loopAdditionalSlides: 0,

	});


});
/* ============= Team Modal Box =========*/
$(document).ready(function () {
	'use strict';
	$('.team-img-box').on('click', function () {
		$("#team-modal .modal-body img").attr("src", $(this).find(".img img").attr("src"));
		var data = $(this).find(".modal-deatil").html();
		$("#team-modal").modal("show");


		$(".popup-bottom-content-left").removeClass('reverse-close-left');
		$(".popup-bottom-content-right").removeClass('reverse-close-right');
		$("#team-modal .modal-body .pop-heading div").html(data);
	});

	$(".modal-footer .close").on('click', function () {

		$(".popup-bottom-content-left").addClass('reverse-close-left');
		$(".popup-bottom-content-right").addClass('reverse-close-right');


		$('#team-modal').delay(400).fadeOut('slow');
		setTimeout(function () {
			$("#team-modal").modal('hide');
			$('.modal-backdrop').remove("slow");
		}, 300);

	});
	return false;


});

/*============= Magnific Popup===================*/

$(document).ready(function() {
    $('.img-popup').magnificPopup({
        type:'image',
        closeBtnInside: false,
        callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
        gallery:{
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 500
        },
        easing: 'ease-in-out', 
        overflowY: 'hidden',
       
    });
    function changeImgSize(){
        var img = this.content.find('img');
        img.css('max-height', '600px');

    }
});

$(document).ready(function(){
	$(".vdo-popup").magnificPopup({
		disableOn:700,
		type:"iframe",
		mainClass:"mfp-fade",
		removalDelay:160,
		preloader:!1,
		fixedContentPos:!1
	})
});

/* ============= Partner Slider =========*/
$(document).ready(function () {
	'use strict';
	$('.partner_slider').slick({
		autoplay: false,
		slidesToShow: 4,
		infinite: true,
		speed: 1000,
		arrows: false,
		autoplaySpeed: 1000,
		slidesToScroll: 2,
		// variableWidth: true,
		centerMode: true,
		responsive: [{
				breakpoint: 768,
				settings: {
					variableWidth: false,
					centerMode: false,
					slidesToShow: 2,
				}
			},

		]
	});
});