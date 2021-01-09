$(".item").hover( function() {
	var shapes = document.getElementsByClassName("shape");

	for (i = 0; i < shapes.length; i++) {
		shapes[i].classList.toggle("portfolio");
	}
});