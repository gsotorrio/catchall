function getFactorialNumber (){
    var getNumberThatTheUserGive = window.document.getElementById("userNumber").value;
    var showFactorialResultc = "1";

    if (getNumberThatTheUserGive < 0){
        getNumberThatTheUserGive = getNumberThatTheUserGive * (-1);
    }
    
    if (isNaN(getNumberThatTheUserGive) == true){
        window.document.getElementById("error").style.display = "inline-block";
    }
    else {
        for(var i = 1; i <= getNumberThatTheUserGive; i++){
            showFactorialResultc = showFactorialResultc * i;
        }
        window.document.getElementById("error").style.display = "none";        
        window.document.getElementById("showFacltorial").innerText = showFactorialResultc;
    }
}