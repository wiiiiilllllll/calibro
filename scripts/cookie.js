// Cookie banner yeah

$("#cookie-accept").on("click", function(e) {
	$("#cookie-banner").slideUp(400, function() {
	    $(this).remove();
	});
	days = 365; //number of days to keep the cookie
	myDate = new Date();
	myDate.setTime(myDate.getTime()+(days*24*60*60*1000));
	document.cookie = "comply_cookie = comply_yes; expires = " + myDate.toGMTString(); //creates the cookie: name|value|expiry
})