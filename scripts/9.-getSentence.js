"use strict";

function getSentence(){
	var mySentence = [["Mi", "nombre"], ["es", "Guillermo"], ["Sotorrio", "y"], ["tengo", "30"], ["años", "creo!!"]]; 
	
	for(var i = 0; i < mySentence.length; i++){
		for(var z = 0; z < mySentence.length; z++){
		console.log(mySentence[i][z]);
		window.document.getElementById("solution").innerText = mySentence[i][z]
		}
	}
}