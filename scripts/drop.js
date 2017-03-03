// Drop
// For drop-down navigation menus

var drop = {

	init: function(){

		$('body').on('click', function(e){
			drop.closeAll();
		});

		$('body').on('click', '.drop__link', function(el){
			el.preventDefault();
			el.stopPropagation();
			// drop.closeAll();
				drop.toggle( $(el.target).parent() );

			if ($(this).parents('.drop--open')) {
				// drop.toggle( $(el.target).parent() );
			}
		});
	},

	open: function(el){
		el.addClass('drop--open');
	},

	close: function(el){
		$(el).removeClass('drop--open');
	},

	closeAll: function(){
		$('.drop--open').removeClass('drop--open');
	},

	toggle: function(el){
		$(el).toggleClass('drop--open');
	},
}

$(function(){
	drop.init();
})