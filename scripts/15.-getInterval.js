function getInterval (){
    var firstNumberInterval = window.document.getElementById("firstNumber").value;
    var secondNumberInterval = window.document.getElementById("secondNumber").value;
    var aux;
    var arrayNumbers = [];

    if (firstNumberInterval > secondNumberInterval ){
         aux = firstNumberInterval
        firstNumberInterval = secondNumberInterval;
        secondNumberInterval = aux;
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
    window.document.getElementById("interval").innerText = arrayNumbers.slice(firstNumberInterval, secondNumberInterval);
}