$(".portfoliobtn").hover( function() {
	var shapes = document.getElementsByClassName("shape");

	for (i = 0; i < shapes.length; i++) {
		shapes[i].classList.toggle("portfolio");
	}
});

$(".partnerbtn").hover( function() {
	var shapes = document.getElementsByClassName("shape");

	for (i = 0; i < shapes.length; i++) {
		shapes[i].classList.toggle("partner");
	}
});

function dropdown() {
	var dropdown = document.querySelector(".dropdown");
	var navbar = document.querySelector(".navbar");
	dropdown.classList.toggle("shown");
	navbar.classList.toggle("dropdownshown");
}

window.addEventListener("scroll", function() {
	var offset = window.pageYOffset;
	var navbar = document.querySelector(".navbar");

	if (offset > 50) {
		navbar.classList.add("scrolled");
	}

	else if (offset < 50) {
		navbar.classList.remove("scrolled");
	}
});