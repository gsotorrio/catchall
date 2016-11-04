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
	
	if (wordPal == word){
		return "This word is a palindrome";
	}
	else {
		return "this word it is not palindrome";
	}
}


function showTheWord(){
	window.document.getElementById("wordPalindrome").innerText = checkPalindrome();
}