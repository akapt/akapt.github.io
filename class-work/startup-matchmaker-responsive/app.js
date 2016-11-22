$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		var width = $(window).width();
		if(width >= "850px"){
			$("#smallNav").hide();
		}
	})
	$("#smallNavIcon").click(function(){
		$("#smallNav").slideToggle();
	})
		
})