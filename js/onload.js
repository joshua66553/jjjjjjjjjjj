$('html, body').css({
  	'overflow': 'hidden',
  	'height': '100vh'
});

window.onload = function() {
	setTimeout(function() {
		document.querySelector(".preloader").classList.add("loaded");
		$('html, body').css({
		  	'overflow': 'auto',
		 	'height': 'auto'
		});
	}, 1000);
}