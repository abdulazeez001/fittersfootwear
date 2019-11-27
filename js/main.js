function portfolio(){
	window.open('portfolio.html');
}
$("#slide").hide();
$("#item").click(function(){
	$("#slide").slideToggle();
});
$(function () {
    new WOW().init();
});