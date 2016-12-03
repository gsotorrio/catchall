"use strict";

function showTheLongerString (){
    var getOriginalString = window.document.getElementById("originalString").innerText;
    var stringInArray = getOriginalString.split(" ");
    var longString = "";
    var longerArray = "";

    for(var i = 0; i < stringInArray.length; i++){

        if (stringInArray[i].length > longString){
            longString = stringInArray[i].length;
            longerArray = stringInArray[i];
        }
    }
    window.document.getElementById("stringWin").innerText = "In this sentence the word more long is:" + " " + longerArray;
}