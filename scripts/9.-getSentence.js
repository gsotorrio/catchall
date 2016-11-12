"use strict";

function getSentence(){
	var mySentence = [["Mi", "nombre"], ["es", "Guillermo"], ["Sotorrio", "y"], ["tengo", "30"], ["años", "creo!!"]]; 
	var getWordsFor = "";
	var saveWordsAndWriteSentence = "";
	
	for(var i = 0; i < mySentence.length; i++){
		
		var secondElementArray = mySentence[i];
		
		for(var j = 0; j < secondElementArray.length; j++){
		getWordsFor = mySentence[i][j];
		saveWordsAndWriteSentence = saveWordsAndWriteSentence + " " + getWordsFor;	
		}
	}
	
	window.document.getElementById("solution").innerText = saveWordsAndWriteSentence;
}