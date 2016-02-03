$(function () {

	$('.minus-input-plus__minus').on('click', function () {
		var $inputSibling = $(this).parent().siblings('input');
        $inputSibling.val(parseInt($inputSibling.val()) - 1);
	});

	$('.minus-input-plus__plus').on('click', function () {
		var $inputSibling = $(this).parent().siblings('input');
		$inputSibling.val(parseInt($inputSibling.val()) + 1);
	})
});
