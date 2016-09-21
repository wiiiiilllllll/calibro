// menu

var menu = {
	init: function(){
		$(document).on('click','.menu',function(){
			menu.toggle();
		})
	},

	open: function(){
		$('.nav').addClass('nav--open');
		overlay.open();
	},

	close: function(){
		$('.nav').removeClass('nav--open');
		overlay.close();
	},

	toggle: function(){
		$('.nav').toggleClass('nav--open');
		overlay.toggle();
	}
}

$(function() {
	menu.init();
})
// overlay

var overlay = {

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