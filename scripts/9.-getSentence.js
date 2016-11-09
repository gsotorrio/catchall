"use strict";

function getSentence(){
	var mySentence = [["Mi", "nombre"], ["es", "Guillermo"], ["Sotorrio", "y"], ["tengo", "30"], ["años", "creo!!"]]; 
	
	for(var i = 0; i < mySentence.length; i++){
		
		var secondElementArray = mySentence[i];
		
		for(var j = 0; j < secondElementArray.length; j++){
		console.log(mySentence[i][j]);
		window.document.getElementById("solution").innerText = mySentence[i][j];
		}
	}
}