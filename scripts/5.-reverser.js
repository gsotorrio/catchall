"use strict";

function reverser(){
	var number = window.document.getElementById("numberBox").value;
	var x = number.length;
    var numberRverser = "";
 
  while (x>=0) {
    numberRverser = numberRverser + number.charAt(x);
    x--;
  }
  return numberRverser;

}

