"use strict";
// Function do the reserver
function reverser(){
	// This var take the number that the user enter
	var number = window.document.getElementById("numberBox").value;
	
	// This is asistant var for know if is a number.
	var aux = parseInt(window.document.getElementById("numberBox").value);
	
	// Asistants var for reverser the number 
	var x = number.length;
    var numberRverser = "";
 
	// Conditional for know if the user give numbers or no.
	if (isNaN(aux) == true){
		alert ("please only numbers")
	}
	else{
		// This make the reverser.
		while (x>=0) {
			numberRverser = numberRverser + number.charAt(x);
			x--;
		}
	}	
  return "Your new number is: " +  numberRverser;
}

// Function show the new number.
function showNumberReverser(){
	window.document.getElementById("numRev").innerText = reverser();
}