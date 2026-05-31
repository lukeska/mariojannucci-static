$(document).ready(function() {

	// unveil
	$("img").unveil();

	$('.home #Home-Quote').append('<a href="javascript:;" class="close-quote">Chiudi</a>');
	$('.home #Home-Quote').parent().append('<a href="javascript:;" class="open-quote">Apri</a>');

	$('.home #Home-Quote .close-quote').on('click', function() {
		$('.home #Home-Quote').fadeOut(300);
		$('.home .open-quote').fadeIn(500);
	});

	$('.home .open-quote').on('click', function() {
		$('.home .open-quote').fadeOut(300);
		$('.home #Home-Quote').fadeIn(500);
	});


	// pannello notifica cookies
    var acceptCookie = $.cookie("accept_cookie_mj");

    if (acceptCookie == null)
    {
        $('#Cookies').show();

        $('.close-cookie-btn').on('click', function() {
            $('#Cookies').fadeOut(300);
            $.cookie("accept_cookie_mj", 1, { expires: 365, path: "/"});

            $('.activate_by_cookie').attr('type', 'text/javascript');
            eval($('.activate_by_cookie').html());
        });
    }
    else {
    	$('.activate_by_cookie').attr('type', 'text/javascript');
        eval($('.activate_by_cookie').html());
    }

    $('.cookie-btn').click(function(event) {
    	event.preventDefault();
    	$('a', $('iframe.iubenda-ibadge').contents()).click();
    });

	
});

$(window).ready(function() {
	if($("#flipbook").length > 0) {

		$("#flipbook").turn({
			width: 900,
			height: 500,
			autoCenter: true,
			shadows: true,
			acceleration: true
		});

		$("#flipbook").append('<a href="javascript:;" class="close-flipbook">Chiudi</a>');

		$("#flipbook").append('<span class="info-flipbook">Sfoglia come un libro, trascinando gli angoli della pagina.</span>');

		$('.close-flipbook').on('click', function() {
			$(".flipbook-container").hide(300);
		});

		$('.flip-overlay').on('click', function() {
			$(".flipbook-container").hide(300);
		});

		$('.openflipbook').on('click', function() {
			$(".flipbook-container").show(300);
		});
	}
});