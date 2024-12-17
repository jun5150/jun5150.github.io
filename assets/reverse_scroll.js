// REVERSE SCROLL
$(window).on("scroll", function () {
	$("main").css("bottom", $(window).scrollTop() * -1);
});