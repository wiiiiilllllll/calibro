var blocks = {
	
	init: function() {
		// $('.blocks').masonry();
		$('.blocks').on('click', function(e){
			e.preventDefault();
			blocks.open(e);
		})
	},

	open: function(e) {
		var parent = $(e.target).parents('.block'),
			back = parent.find('.block__back').html();
		$('.dialog__body').html(back);
		setTimeout(function(){
			overlay.open();
		}, 100);
		setTimeout(function(){
			dialog.open();
		}, 200);
	},

	close: function() {
		$('.block--open').removeClass('block--open');
		dialog.close();
		overlay.close();
	}
}