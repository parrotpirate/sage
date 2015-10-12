jQuery(document).ready(function($) {
	
		// Project selector center
	$('.project_select').on('click', '.wrapper.connecto', function(event) {
		event.preventDefault();
		$('.center .curiosity, .center .american_university').fadeOut('300ms', function() {
			$('.center .connecto').fadeIn('300ms');
		});
		$('.project_display .curiosity, .project_display .american_university').fadeOut('300ms', function() {
			$('.project_display .connecto').fadeIn('300ms');
		});
	});

	$('.project_select').on('click', '.wrapper.curiosity', function(event) {
		event.preventDefault();
		$('.center .connecto, .center .american_university').fadeOut('300ms', function() {
			$('.center .curiosity').fadeIn('300ms');
		});
		$('.project_display .connecto, .project_display .american_university').fadeOut('300ms', function() {
			$('.project_display .curiosity').fadeIn('300ms');
		});
	});

	$('.project_select').on('click', '.wrapper.american_university', function(event) {
		event.preventDefault();
		$('.center .curiosity, .center .connecto').fadeOut('300ms', function() {
			$('.center .american_university').fadeIn('300ms');
		});
		$('.project_display .curiosity, .project_display .connecto').fadeOut('300ms', function() {
			$('.project_display .american_university').fadeIn('300ms');
		});
	});

	//Project selector left
	$('.project_select').on('click', '.left.wrapper.american_university', function(event) {
		event.preventDefault();
		$(this).addClass('curiosity');
		$(this).removeClass('american_university');
	    $('p.left_select').text('curiosity');
	    $('.right.wrapper.curiosity').removeClass('curiosity').addClass('connecto');
	    $('p.right_select').text('connecto');
	});
	$('.project_select').on('click', '.left.wrapper.curiosity', function(event) {
		event.preventDefault();
		$(this).removeClass('curiosity').addClass('connecto');
	    $('p.left_select').text('connecto');
	    $('.right.wrapper.connecto').removeClass('connecto').addClass('american_university');
	    $('p.right_select').text('american university');
	});
	$('.project_select').on('click', '.left.wrapper.connecto', function(event) {
		event.preventDefault();
		$(this).removeClass('connecto').addClass('american_university');
	    $('p.left_select').text('american university');
	    $('.right.wrapper.connecto').removeClass('american_university').addClass('curiosity');
	    $('p.right_select').text('curiosity');
	});

	//Project selector right
	$('.project_select').on('click', '.right.wrapper.curiosity', function(event) {
		event.preventDefault();
		$(this).removeClass('curiosity').addClass('american_university');
	    $('p.right_select').text('american university');
	    $('.left.wrapper.american_university').removeClass('american_university').addClass('connecto');
	    $('p.left_select').text('connecto');
	});
	$('.project_select').on('click', '.right.wrapper.american_university', function(event) {
		event.preventDefault();
		$(this).removeClass('american_university').addClass('connecto');
	    $('p.right_select').text('connecto');
	    $('.left.wrapper.connecto').removeClass('connecto').addClass('curiosity');
	    $('p.left_select').text('curiosity');
	});
	$('.project_select').on('click', '.right.wrapper.connecto', function(event) {
		event.preventDefault();
		$(this).removeClass('connecto').addClass('curiosity');
	    $('p.right_select').text('curiosity');
	    $('.left.wrapper.connecto').removeClass('curiosity').addClass('american_university');
	    $('p.left_select').text('american university');
	});













});
