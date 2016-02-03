$(function () {

	$('.minus-input-plus__minus').on('click', function () {
		$(this)
			.parent()
			.siblings('input')
			.val(parseInt($(this).parent().siblings('input').val()) - 1)
	});

	$('.minus-input-plus__plus').on('click', function () {
		$(this)
			.parent()
			.siblings('input')
			.val(parseInt($(this).parent().siblings('input').val()) + 1)
	})
});
