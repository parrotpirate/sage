jQuery(document).ready(function($) {
	// Search box
	$('.fa-search').click(function(event) {
	    $('.search_block').fadeToggle(function() {
	        $('#search_input').focus();
	    });
	});

	$('#search_input').keypress(function(e) {
	    var x = e.keyCode;
	    if (x === 13) {
	        e.preventDefault();
	        $('#search').submit();
	        // $('#search_input').val('');
	        $('.search_block').fadeToggle();
	        $('body').focus();
	    }
	});
	// End search box

	// Language select dropdown
	$('.language_select').click(function(e) {
	    $(this).toggleClass('active');
	    $('.arrow').toggleClass('active');
	});
	// End language select dropdown
});