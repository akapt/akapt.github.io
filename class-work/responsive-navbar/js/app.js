$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		var width = $(window).width();
		if(width >= "880px"){
			$("#smallNav").hide();
		}
	})

	$(window).scroll(function(){
		var offset = $(window).scrollTop();
		console.log(offset);
	})

	$("#burger").click(function(){
		$("#smallNav").slideToggle();
	})
		

})
