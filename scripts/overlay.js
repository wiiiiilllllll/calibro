// Overlay

var overlay = {

	init: function(){
		$(document).on('click', '.overlay', function(){
			dialog.close();
			overlay.close();
		})
	},

	open: function(){
		$('.overlay').addClass('overlay--open')
	},

	close: function(){
		$('.overlay').removeClass('overlay--open')
	},

	toggle: function(){
		$('.overlay').toggleClass('overlay--open')
	}
}

$(function(){
	overlay.init();
})