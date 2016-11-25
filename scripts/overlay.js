// Overlay

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