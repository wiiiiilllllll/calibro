// Courtesy of CSS Tricks:
// https://css-tricks.com/snippets/jquery/open-external-links-in-new-window/

$(function(){	
	$('a').each(function() {
	   var a = new RegExp('/' + window.location.host + '/');
	   if(!a.test(this.href)) {
	       $(this).attr('target', '_blank');
	   }
	});
})