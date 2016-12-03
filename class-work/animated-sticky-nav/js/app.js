$(document).ready(function () {
	

	$(window).scroll(function(){
		var offSet = $(window).scrollTop();
		if(offSet > 150){
			$('header').addClass('headerOffSet');
		}
		else{
			$('header').removeClass('headerOffSet');
		}
	})

})
