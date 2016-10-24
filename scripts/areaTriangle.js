"use strict";

function area (){
	
	var side1 = window.document.getElementById("A").value;   
	var side2 = window.document.getElementById("B").value;   
	var side3 = window.document.getElementById("C").value;
	
	if(side1 == NaN || side2 == NaN || side3 == NaN){
		alert ("This isnt a number");
	}
		
	if (side1 <= 0 || side2 <= 0 || side3 <= 0){
			alert ("Please use positive numbers");
	}
	else {
		var perimeter = (side1 + side2 + side3)/2;  
		var result =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3))); 
		window.document.getElementById("result").innerText = result;
	}	
}

   
