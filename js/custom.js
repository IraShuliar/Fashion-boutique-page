$(document).ready(function() {
	

	// slider 
	function mainSlider() {
		var elem = $('.slider-wrp .slider');
	
		var slider = elem.lightSlider({
			item: 1,
			mode: 'fade',
			speed: 500,
			loop: true,
			controls: false,
			adaptiveHeight: false,
			pager: true,
		});

		$('.slider-controls .prev').on('click', function (e) {
			slider.goToPrevSlide(); 
		})

		$('.slider-controls .next').on('click', function(e) {
			slider.goToNextSlide();
		})
	}
	mainSlider();

	var translations = {
		ru: {
			title: 'MOOI-Сайт на реконструкции',
			pageTitle: 'Сайт на реконструкции',
			signUpForUpdates: 'Подпишитесь на обновления',
		},
		en: {
			title: 'MOOI-Site under construction',
			pageTitle: 'Site under construction',
			signUpForUpdates: 'Sign up for update',
		},
		sr: {
			title: 'MOOI-Sajt je u rekonstrukciji',
			pageTitle: 'Sajt je u rekonstrukciji',
			signUpForUpdates: 'Potpisite azurirane informacije',
		}
	};

	var pageTitle = $('.page-title');
	var signUpForUpdates = $('.sing-up');

	$('.languages-icons a').on('click', function (e) {
		$('.languages-icons .active').removeClass('active');
		$(this).addClass('active');

		var href = $(this).attr('href');
		var lang = href.substring(1);
		pageTitle.html(translations[lang].pageTitle);
		signUpForUpdates.html(translations[lang].signUpForUpdates);
		document.title = translations[lang].title;

	})

	$('body').on('keyup', '.input-error', function () {
		$(this).removeClass('input-error')
	})

	$('.ajax-form').on('submit', function (event) {
		event.preventDefault();
		var form = $(this)
		var btn = form.find('button[type="submit"]')
		var btnText = btn.html();
		btn.focus();

		var errors = false;
		form.find('.field-required').each(function () {
			if ($(this).val().trim() === '') {
				errors = true;
				$(this).addClass('input-error')
			}

			if($(this).hasClass('telephone-input') && $(this).val().replace(/[^0-9]/g, '').length !== 12) {
				errors = true;
				$(this).addClass('input-error');
			}
		})

		if (!btn.hasClass('form-sending') && !errors) {
			$.ajax({
				type: 'post',
				url: '/send-mail.php',
				data: form.serialize(),
				beforeSend: function () {
					btn.html('Loading...').addClass('form-sending')
				}
			})
				.fail(function () {
					alert('Some errors happened, try again...')
				})
				.done(function (data) {
					if (data == 'true') {
						form[0].reset()
						$('[href="#thank-you-popup"]').click()
					}
				})
				.always(function (data) {
					btn.html(btnText).removeClass('form-sending');
				})
		}
	})

	$('.popup-link').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: 'my-mfp-zoom-in',
		midClick: true,
		fixedContentPos: false,
		removalDelay: 300,
	})

	$('.header-callback-link').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: 'my-mfp-zoom-in',
		midClick: true,
		fixedContentPos: false,
		removalDelay: 300,
		disableOn: function () {
			return $(window).width() > 600
		}
	})

	$headerTel = $('.header-callback-link')

	$(window).on('ready load resize', function () {
		if ($(window).width() < 600) {
			$headerTel.attr('href', $headerTel.data('mobile-href'))
			$headerTel.removeClass('popup-link')
		} else {
			$headerTel.attr('href', $headerTel.data('desktop-href'))
			$headerTel.addClass('popup-link')
		}
	})

})