document.getElementById('click-me').onclick =  calculate;


function calculate (){
	var age = parseInt(document.querySelector('#age').value);
	var maxAge = parseInt(document.querySelector('#max-age').value);
	var favDrink = parseInt(document.querySelector('#item').value);
	var numPerDay = parseInt(document.querySelector('#num-per-day').value);
	console.log(age, maxAge, favDrink, numPerDay);

	var drinksLeft= (maxAge - age)  * numPerDay * 356;

	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML =  item.value;
}
