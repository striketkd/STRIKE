$(function(){
	/***********************
	******* Navigation *****
	************************/
	// Mobile nav -- if 1 is expanded, close the other
    $('.navbar-dark .navbar-collapse').on('show.bs.collapse', function(e) {
        $('.navbar-dark .navbar-collapse').not(this).collapse('hide');
    });
	
	// Close the menus on item click
    $('.navbar-collapse ul li a').click(function() {
		 $('.navbar-dark .navbar-collapse').collapse('hide');
    });
	
	// Highlight active section
	var sections = $('section'),
	 nav = $('#navbarCollapse[role="navigation"]');
	
	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    var top = $(this).offset().top - 150
	        	bottom = top + $(this).outerHeight();
				
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	  	});
	});
	
	
	// Smooth page scrolling
	var scrolly = $('a.page-scroll');
	scrolly.click( function(event) {
		
		// Store vars
		var hash = $(this);
		var body = $('html, body');
		var lefty = $('featurette');
		var righty = $('featurette');
		var easing = 'easeInExpo';
				
        body.stop().animate({
            scrollTop: ($(hash.attr('href')).offset().top - 150)
        }, 700, 'swing');
        event.preventDefault();
    });
	
	
	// Tooltips
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


	/***********************
	****** Owl Carousel ****
	************************/
	// Owl Carousel
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		stagePadding: 10,
		margin: 10,
		loop: true,
		nav:true,
		responsive: {
			0: {
				items: 1,
				nav:true
			},
			800: {
				items: 2,
				nav:true
			},
			1000: {
				items: 3,
				nav:true
			},
			1400: {
				items: 4,
				nav:true
			}
		}
	})
});