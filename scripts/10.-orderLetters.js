"use strict";

function putlettersInCorrectOrder(){
    var getLettersForUser = window.document.getElementById("letterbox").value;
    console.log(getLettersForUser);

    window.document.getElementById("showOrderLetters").innerText = "The alphabetical order is:" + " " + getLettersForUser.split('').sort().join('');
}