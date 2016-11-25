// Menu
// For opening/closing the mobile menu

var menu = {
	init: function(){
		$(document).on('click','.menu',function(){
			menu.toggle();
		});
		
		$(window).resize(function() {
		    menu.watch();
		});
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
	},

	watch: debounce(function() {
		if ( $(window).width() > 600) {
			menu.close()
		}
	}, 250)
}

$(function() {
	menu.init();
})