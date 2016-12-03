"use strict";

function getInterval (){
    var firstNumberInterval = parseInt(window.document.getElementById("firstNumber").value);
    var secondNumberInterval = parseInt(window.document.getElementById("secondNumber").value);
    var saveTheFirstValueIfIsBiguerThanSecond;
    var arrayNumbers = [];

    if (firstNumberInterval > secondNumberInterval ){
        saveTheFirstValueIfIsBiguerThanSecond = firstNumberInterval;
        firstNumberInterval = secondNumberInterval;
        secondNumberInterval = saveTheFirstValueIfIsBiguerThanSecond;
    }

    if (firstNumberInterval < 0 || secondNumberInterval > 100){
         window.document.getElementById("textError").style.display = "inline-block";
    }
    else {
        for (var i = 0; i <100;  i++){
            arrayNumbers.splice(i, 0, i);
        }
        window.document.getElementById("textError").style.display = "none";    
    }  
  window.document.getElementById("interval").innerText = "[" + arrayNumbers.slice(firstNumberInterval, secondNumberInterval) + "]";
}