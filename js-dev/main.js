/***********************
 отправка формы в php BEGIN
***********************/
$(document).ready(function(){

	$(".ajax-form").on("submit", function(event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function(){
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
		});

		$(this).find("[data-req='true']").on('focus', function(){
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label');
			form_data.append(input_label__name,input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function(result) {
					console.log(result);
					if( form.parents('.agmodal').length){
						form.parents('.agmodal').agmodal('close');
					}
					$('#modal-spasibo').agmodal('open');
					setTimeout(function() {$('#modal-spasibo').agmodal('close');},4500);
					form[0].reset();
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
***********************/


/***********************
Input mask BEGIN
***********************/
jQuery(function($){
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});
/***********************
Input mask END
***********************/


/***********************
fancybox BEGIN
***********************/
$(document).ready(function(){
	$('.fancy').fancybox({
		padding: 0
	});
});
/***********************
fancybox END
***********************/


/***********************
agmodal BEGIN
***********************/
$(document).ready(function(){
	$('.modal').agmodal({
		effect: 'fade',
		overlayColor: 'rgba(44, 55, 73, 0.9)'
	});
});
/***********************
agmodal END
***********************/


/***********************
 Прокрутка к секциям BEGIN
***********************/
$(document).ready(function(){
	$('.scrollto').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html').velocity( "scroll", { duration: 1000, easing: "easeInOutCubic", offset: destination, mobileHA: false });
		$('body').velocity( "scroll", { duration: 1000, easing: "easeInOutCubic", offset: destination, mobileHA: false });
		return false;
	});
});
/***********************
 Прокрутка к секциям END
***********************/


/***********************
Custom scrollbars BEGIN
***********************/
$(document).ready(function(){
	$(".scroll").mCustomScrollbar({
		axis:"y",
		scrollInertia: 200,
		scrollButtons:{ enable: true }
	});
});
/***********************
Custom scrollbars END
***********************/