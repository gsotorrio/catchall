"use strict";
//Function check the words.
function checkPalindrome(){
	// This var get the user write.
	var word = window.document.getElementById("wordBox").value;
	
	//This var help for know if user write words or numbers
	var aux = parseInt(word);
	
	// These var are asistants for reverser the words.
	var numberOfLetter = word.length;
    var wordPal = "";
 
	// This conditional check if user write words or numbers
	if (isNaN(aux) != true){
		alert ("please only words")
	}
	
	else{
		// Reverser the words
		while (numberOfLetter >= 0) {
			wordPal = wordPal + word.charAt(numberOfLetter);
			numberOfLetter--;
		}
	}	
	
	// This conditional check and return if the words are palindromes.
	if (wordPal == word){
		window.document.getElementById("wordPalindrome").innerText = "This word is a palindrome";
	}
	else {
		window.document.getElementById("wordPalindrome").innerText = "this word it is not palindrome";
	}
}

