"use strict";

function reverser(){
	var number = window.document.getElementById("numberBox").value;
	var aux = parseInt(window.document.getElementById("numberBox").value);
	var x = number.length;
    var numberRverser = "";
 
	if (isNaN(aux) == true){
		alert ("please only numbers")
	}
	else{
		while (x>=0) {
			numberRverser = numberRverser + number.charAt(x);
			x--;
		}
	}	
  return "Your new number is: " +  numberRverser;
}

function showNumberReverser(){
	window.document.getElementById("numRev").innerText = reverser();
}