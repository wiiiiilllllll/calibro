// Dialog

var dialog = {

	open: function(){
		$('.dialog').addClass('dialog--open');
		$('body').addClass('body--frozen');
	},

	close: function(){
		$('.dialog').removeClass('dialog--open');
		$('body').removeClass('body--frozen');
		setTimeout(function(){
			$('.dialog__body').html('')
		}, 300);
	},

	populate: function(stuff) {
		$('.dialog__body').html(stuff);
	}
}