var blocks = {
	
	init: function() {
		$('.block').on('click', function(e){
			e.preventDefault();
			blocks.open($(this));
		})
	},

	open: function(block) {
		var stuff = block.find('.block__back').html();
		dialog.populate(stuff);
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