var mailtoLinks = document.querySelectorAll('a[href*="mailto"]'),
	j = mailtoLinks.length;

for (i=0; i<j; i++) {
	mailtoLinks[i].onclick = function(e) {
		e.target.href = e.target.href.replace('@@','.');	
	}
}