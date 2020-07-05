/**
 * 
 */
define(['jquery'], function ($){
	var lis = $('#colors li').get();
	var size = $('#colors li').length;
	for(var i = 0; i < size; i++){
		console.log(lis[i].innerHTML);
	}
	

})
