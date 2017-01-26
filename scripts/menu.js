// Menu
// For opening/closing the mobile menu

var menu = {
	isOpen: false,

	init: function(){
		$(document).on('click','.menu',function(){
			menu.toggle();
		});

		$(document).on('click', '.overlay', function(){
			if (menu.isOpen) {
				menu.close();
			}
		});
		
		$(window).resize(function() {
		    menu.watch();
		});
	},

	open: function(){
		$('.nav').addClass('nav--open');
		overlay.open();
		menu.isOpen = true;
		$('.header-container').addClass('isAboveOverlay')
	},

	close: function(){
		$('.nav').removeClass('nav--open').addClass('nav--closing');
		setTimeout(function(){
			$('.nav').removeClass('nav--closing');
		}, 300);
		overlay.close();
		menu.isOpen = false;
		$('.header-container').removeClass('isAboveOverlay')
	},

	toggle: function(){
		if (menu.isOpen) {
			menu.close();
		} else {
			menu.open();
		}
	},

	watch: debounce(function() {
		if ( ($(window).width() > 600) && menu.isOpen ) {
			menu.close()
		}
	}, 250)
}

$(function() {
	menu.init();
})