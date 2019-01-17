(function(){
	var $grid = $('.hotel-gallery .list-img').isotope({
		percentPosition: true,
	  	itemSelector: '.list-img__grid',
	  	layoutMode: 'masonry',
	  	masonry: {
	    	// set to the element
	    	columnWidth: '.grid-sizer',
	    
	  	}
	});
})()