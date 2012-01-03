$('#pp').on('webkitTransitionEnd', function() {
	$(this).toggleClass('bottom');
});

$('#pp').on('mouseenter mouseleave', function(){
	$(this).toggleClass('tall');
});

$('#pp').trigger('webkitTransitionEnd');