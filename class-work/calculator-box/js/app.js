// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()


$(document).ready(function(){
	
	var count = 0;
	var color = 'white';
	function update(){
		$('#out').text(count);
		$('#out').css('background', color);
	}
	$('#out').click(function(){
		count = 0;
		color = 'white';
		update();
	});
	$('#a10').click(function(){
		count += 10;
		update();
	});
	$('#a20').click(function(){
		count += 20;
		update();
	});
	$('#a30').click(function(){
		count += 30;
		update();
	});
	$('#n10').click(function(){
		count -= 10;
		update();
	});
	$('#n20').click(function(){
		count -= 20;
		update();
	});
	$('#n30').click(function(){
		count -= 30;
		update();
	});
	$('#red').click(function(){
		color = 'red';
		update();
	});
	$('#blue').click(function(){
		color = 'blue';
		update();
	});
});