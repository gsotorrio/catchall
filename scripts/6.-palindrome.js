"use strict";
//Function check the words.
function checkPalindrome(){
	// This var get the user write.
	var word = window.document.getElementById("wordBox").value;
	
	//This var help for know if user write words or numbers
	var aux = parseInt(window.document.getElementById("wordBox").value);
	
	// These var are asistants for reverser the words.
	var x = word.length;
    var wordPal = "";
 
	// This conditional check if user write words or numbers
	if (isNaN(aux) == false){
		alert ("please only words")
	}
	
	else{
		// Reverser the words
		while (x>=0) {
			wordPal = wordPal + word.charAt(x);
			x--;
		}
	}	
	
	// This conditional check and return if the words are palindromes.
	if (wordPal == word){
		return "This word is a palindrome";
	}
	else {
		return "this word it is not palindrome";
	}
}

// This function show the returns with solution.
function showTheWord(){
	window.document.getElementById("wordPalindrome").innerText = checkPalindrome();
}