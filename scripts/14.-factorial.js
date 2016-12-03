"use strict";

function getFactorialNumber (){
    var userNumber = window.document.getElementById("userNumber").value;
    var result = 1;

    if (userNumber < 0){
        userNumber = userNumber * (-1);
    }
    
    if (isNaN(userNumber) == true){
        window.document.getElementById("error").style.display = "inline-block";
    }
    else {
        for(var i = 1; i <= userNumber; i++){
            result = result * i;
        }
        window.document.getElementById("error").style.display = "none";        
        window.document.getElementById("showFacltorial").innerText = result;
    }
}