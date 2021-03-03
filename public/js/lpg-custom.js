//lpg-custom.js

//on screen fix button js start
function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}
//on screen fix button js end

$(document).ready(function() {

    if( isOnScreen($(".nonStickyBtn").eq(0)) ||
        isOnScreen($(".nonStickyBtn").eq(1)) || 
        isOnScreen($(".nonStickyBtn").eq(2)) || 
        isOnScreen($(".nonStickyBtn").eq(3)) || 
        isOnScreen($(".nonStickyBtn").eq(4)) || 
        isOnScreen($(".nonStickyBtn").eq(5)) || 
        isOnScreen($(".nonStickyBtn").eq(6)) || 
        isOnScreen($(".nonStickyBtn").eq(7)) || 
        isOnScreen($(".nonStickyBtn").eq(8)) ||
        isOnScreen($("#CTASection")) ) {
        $(".stickyBtn").fadeOut(10);
    } else {
        // $(".stickyBtn").fadeIn(10);
        if($(window).width() < 767){
            $(".stickyBtn").fadeIn(10);
        }
    }
    $(window).on('scroll',function(){
        if( isOnScreen($(".nonStickyBtn").eq(0)) ||
        isOnScreen($(".nonStickyBtn").eq(1)) || 
        isOnScreen($(".nonStickyBtn").eq(2)) || 
        isOnScreen($(".nonStickyBtn").eq(3)) || 
        isOnScreen($(".nonStickyBtn").eq(4)) || 
        isOnScreen($(".nonStickyBtn").eq(5)) || 
        isOnScreen($(".nonStickyBtn").eq(6)) || 
        isOnScreen($(".nonStickyBtn").eq(7)) || 
        isOnScreen($(".nonStickyBtn").eq(8)) || 
        isOnScreen($("#CTASection")) ) {
            $(".stickyBtn").fadeOut(10);
        } else {
            // $(".stickyBtn").fadeIn(10);
            if($(window).width() < 767){
                $(".stickyBtn").fadeIn(10);
            }
        }
    });

    /* scroll to target */
    jQuery('.scrollTo').click(function(e) {
        var jump = jQuery(this).attr('href');
        var new_position = jQuery(jump).offset();
        jQuery('html, body').stop().animate({ scrollTop: new_position.top }, 800, function(){
            var new_position = jQuery(jump).offset();
            jQuery('html, body').stop().animate({ scrollTop: new_position.top }, 500);
        });
        e.preventDefault();
    });

    /* initialize fancybox */
    $(".fancybox").fancybox();
      
    /* initialize fitVids */
    $(".videoContainer").fitVids();

    // banner slider js start
    // SLICK
    $('.mainSlider').slick({
        asNavFor: '.navSlider',
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        dots: false,
        autoplay: false,
    });

    $('.navSlider').slick({
        asNavFor: '.mainSlider',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        // vertical: true,
    });
    // banner slider js end

    $('.gallarySlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.testimonialSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        dots: true,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
   

    // /* back to top */
    var btn = jQuery('#backToTop');
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop:0}, '300');
    });


    //accordion js
    // Add minus icon for collapse element which is open by default
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minuss").removeClass("fa-pluss");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-pluss").addClass("fa-minuss");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minuss").addClass("fa-pluss");
    });

    
    /* Quantity Plus Minus popup btn start */
    $('.qtyBtns .qtyplus1').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyBtns .qtyminus1").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    
});

