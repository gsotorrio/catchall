"use strict";

function checkPalindrome(){
	var word = window.document.getElementById("wordBox").value;
	var aux = parseInt(window.document.getElementById("wordBox").value);
	var x = word.length;
    var wordPal = "";
 

	if (isNaN(aux) == false){
		alert ("please only words")
	}
	
	else{
		
		while (x>=0) {
			wordPal = wordPal + word.charAt(x);
			x--;
		}
	}	
  return "Your new number is: " +  wordPal;
}


function showTheWord(){
	window.document.getElementById("wordPalindrome").innerText = checkPalindrome();
}