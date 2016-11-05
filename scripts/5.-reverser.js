"use strict";
// Function do the reverser
function reverser(){
	// This var take the number that the user enter
	var number = window.document.getElementById("numberBox").value;
	
	// This is asistant var for know if is a number.
	var aux = parseInt(number);
	
	// Asistants var for reverser the number 
	var numberOfCharacters = number.length;
    var numberRverser = "";
 
	// Conditional for know if the user give numbers or no.
	if (isNaN(aux)){
		alert ("please only numbers")
	}
	else{
		// This make the reverser.
		while (numberOfCharacters >= 0) {
			numberRverser = numberRverser + number.charAt(numberOfCharacters);
			numberOfCharacters--;
		}
	}	
	window.document.getElementById("numRev").innerText = "Your new number is: " +  numberRverser;
}



