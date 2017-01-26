var blocks = {
	
	init: function() {
		$('.block').on('click', function(e){
			e.preventDefault();
			blocks.open($(this));
		})
	},

	open: function(block) {
		var back = block.find('.block__back').html();
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