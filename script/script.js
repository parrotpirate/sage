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

    // Video pop out
    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        width: 1000,
        height: 800,
        helpers: {
            media: {}
        }
    });
    // End video popout

    // Project slider
    $('.indicator1').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.indicator2').removeClass('active');
        $('.featured1').addClass('active');
        $('.featured2').removeClass('active');
    });

    $('.indicator2').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.indicator1').removeClass('active');
        $('.featured2').addClass('active');
        $('.featured1').removeClass('active');
    });
    //End project slider
    
   









});