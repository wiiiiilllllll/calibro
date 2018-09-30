// Drop
// For drop-down navigation menus

var drop = {

	init: function(){

		$('body').on('click', function(e){
			drop.closeAll();

			if ($(e.target).hasClass('drop__link')) {
				e.preventDefault();
				e.stopPropagation();
				drop.toggle( $(e.target).parent() );	
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