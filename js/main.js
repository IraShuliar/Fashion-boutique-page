// var isConstructorForm = false;

// $(document).ready(function () {

// 	$('.js-scrollToElem').on('click', function (e) {
// 		e.preventDefault();
// 		var id = $(this).attr('href');
// 		$("html, body").animate({
// 			scrollTop: $(id).offset().top
// 		}, 500);
// 	})

// 	$('.popup-link').magnificPopup({
// 		type: 'inline',
// 		closeBtnInside: true,
// 		mainClass: 'my-mfp-zoom-in',
// 		midClick: true,
// 		fixedContentPos: false,
// 		removalDelay: 300,
// 	}).on('click', function () {
// 		$('.popup-message').hide();
// 		$('.popup-main-content').show();
// 	})

// 	$('.telephone-input').inputmask("mask", {"mask": "+38 (099) 999 99 99"});

// 	$('body').on('keyup', '.input-error', function () {
// 		$(this).removeClass('input-error')
// 	})

// 	$('.ajax-form').on('submit', function (event) {
// 		event.preventDefault();
// 		var form = $(this)
// 		var btn = form.find('button[type="submit"]')
// 		var btnText = btn.html();
// 		btn.focus();

// 		var errors = false;
// 		form.find('.field-required').each(function () {
// 			if ($(this).val().trim() === '') {
// 				errors = true;
// 				$(this).addClass('input-error')
// 			}

// 			if($(this).hasClass('telephone-input') && $(this).val().replace(/[^0-9]/g, '').length !== 12) {
// 				errors = true;
// 				$(this).addClass('input-error');
// 			}
// 		})


// 		var data;
// 		if(isConstructorForm) {
// 			data = {
// 				jsonData: JSON.stringify({
// 					main: ConstructorState.main,
// 					additionalServices: ConstructorState.additionalServices,
// 				}),
// 				userName: form.find('[name="userName"]').val(),
// 				userTelephone: form.find('[name="userTelephone"]').val(),
// 				action: form.find('[name="action"]').val(),
// 			}
// 		} else {
// 			data = form.serialize();
// 		}

// 		if (!btn.hasClass('form-sending') && !errors) {
// 			$.ajax({
// 				type: 'post',
// 				url: '/sitegepard/send-mail.php',
// 				data: data,
// 				beforeSend: function () {
// 					btn.html('Подождите...').addClass('form-sending')
// 				}
// 			})
// 				.fail(function () {
// 					alert('Извините произошла ошибка, попытайтесь еще раз')
// 				})
// 				.done(function (data) {
// 					if (data == 'true') {
// 						form[0].reset()
// 						$('[href="#thanks-popup"]').click()
// 						isConstructorForm = false;
// 					}
// 				})
// 				.always(function (data) {
// 					btn.html(btnText).removeClass('form-sending');
// 				})
// 		}
// 	})

// 	// before leave popup
// 	setTimeout(function () {
// 		$(window).on('mousemove', function (e) {

// 			if (e.clientY <= 5) {
// 				if (!getCookie('beforeLeavePopup')) {
// 					$('.before-leave-link').click()
// 					setCookie('beforeLeavePopup', 'true', 1);
// 				}
// 			}

// 		});
// 	}, 30000)

// 	// gallery
// 	$('.popup-gallery-link').magnificPopup({
// 		type: 'image',
// 		closeOnContentClick: true,
// 		mainClass: 'mfp-img-mobile',
// 		image: {
// 			verticalFit: true
// 		}

// 	});

	// // slider 
	// $('.slider-wrp .slider').each(function() {
	// 	var elem = $(this);
	// 	var slider = elem.lightSlider({
	// 		item: 4,
	// 		slideMargin: 30,
	// 		mode: 'slide',
	// 		speed: 500,
	// 		loop: true,
	// 		controls: false,
	// 		adaptiveHeight: false,
	// 		pager: false,
	// 	})

	// 	var controls = $(elem.data('controls'));

	// 	controls.find('.prev').on('click', function(e) {
	// 		e.preventDefault();
	// 		// if(yaCounter44635615 && yaCounter44635615.reachGoal) {
	// 		// 	yaCounter44635615.reachGoal('vlevo');
	// 		// }
	// 		slider.goToPrevSlide();
	// 	})

	// 	controls.find('.next').on('click', function(e) {
	// 		e.preventDefault();
	// 		// if(yaCounter44635615 && yaCounter44635615.reachGoal) {
	// 		// 	yaCounter44635615.reachGoal('vpravo');
	// 		// }
	// 		slider.goToNextSlide();
	// 	})
	// })

// 	//  reviews slider 
// 	$('.section-reviews__slider-wrp .slider').each(function() {
// 		var elem = $(this);
// 		var slider = elem.lightSlider({
// 			item: 2,
// 			slideMargin: 30,
// 			mode: 'slide',
// 			speed: 500,
// 			loop: true,
// 			controls: false,
// 			adaptiveHeight: false,
// 			pager: false,
// 		})

// 		var controls = elem.parents('.section-reviews__slider-wrp').find('.slider-controls');

// 		controls.find('.prev').on('click', function(e) {
// 			e.preventDefault();
// 			// if(yaCounter44635615 && yaCounter44635615.reachGoal) {
// 			// 	yaCounter44635615.reachGoal('vlevo');
// 			// }
// 			slider.goToPrevSlide();
// 		})

// 		controls.find('.next').on('click', function(e) {
// 			e.preventDefault();
// 			// if(yaCounter44635615 && yaCounter44635615.reachGoal) {
// 			// 	yaCounter44635615.reachGoal('vpravo');
// 			// }
// 			slider.goToNextSlide();
// 		})
// 	})

// 	// timers
// 	setInterval(() => {
// 		var current = new Date();
// 		var nextDay = (new Date()).setDate(current.getDate() + 1);
// 		nextDay = new Date(nextDay).setHours(0);
// 		nextDay = new Date(nextDay).setMinutes(0);
// 		nextDay = new Date(nextDay).setSeconds(0);

// 		var diff = nextDay - current.getTime();
// 		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((diff % (1000 * 60)) / 1000);

// 		$('.timer-zone').each(function() {
// 			var elem = $(this);
// 			var last = elem.find('li').last();
// 			last.find('.main-info').html(leadingZero(seconds));
// 			last.prev().find('.main-info').html(leadingZero(minutes))
// 			last.prev().prev().find('.main-info').html(leadingZero(hours))
// 		})
// 	}, 1000)

// 	function leadingZero(n) {
// 		return n > 9 ? n : '0' + n;
// 	}


// 	// constructor
// 	$('.section-price .radio-btn').on('change', function() {
// 		var elem = $(this);
// 		if (elem.is(':checked')) {
// 			var text = elem.data('text');
// 			var oldPrice = parseInt(elem.data('old-price'));
// 			var newPrice = parseInt(elem.data('new-price'));
// 			ConstructorState.changeMain(text, newPrice, oldPrice);
// 			$("html, body").animate({
// 				scrollTop: $('#order-info').offset().top - 70
// 			}, 400, function() {
// 				$('[href="#decision-popup"]').click();
// 			});
// 		}
// 	})

// 	$('#decision-popup .show-additional-services').on('click', function(e) {
// 		e.preventDefault();
// 		$.magnificPopup.close();
// 	})

// 	$('.section-price .check-btn').on('change', function() {
// 		var elem = $(this);
// 		var text = elem.data('text');

// 		if (elem.is(':checked')) {
// 			var oldPrice = parseInt(elem.data('old-price'));
// 			var newPrice = parseInt(elem.data('new-price'));
// 			ConstructorState.addService(text, newPrice, oldPrice);
// 		} else {
// 			ConstructorState.removeService(text);
// 		}
// 	})

// 	$('#decision-popup .make-order, .constructor-make-order').on('click', function(e) {
// 		isConstructorForm = true;
// 	})

// })

// function setCookie(cname, cvalue, exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); //exdays*24*60*60*1000
// 	var expires = "expires=" + d.toUTCString();
// 	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
// }