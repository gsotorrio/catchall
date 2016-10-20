"use strict";

var side1 = window.document.getElementById("A").value;   
var side2 = window.document.getElementById("B").value;   
var side3 = window.document.getElementById("C").value;

function area (side1, side2, side3){
	
	if(side1 || side2 || side3 == NaN){
		alert ("This isnt a number");
		if (side1 || side2 || side3 <= 0){
			alert ("Please use positive numbers");
		}
	}
	
	else {
		var perimeter = (side1 + side2 + side3)/2;  
		var operation =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3))); 
		alert (operation);
	}
}

   
