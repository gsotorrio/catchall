function getInterval (){
    var firstNumberInterval = window.document.getElementById("firstNumber").value;
    var secondNumberInterval = window.document.getElementById("secondNumber").value;
    
    var arrayNumbers = [];

    for (var i = 0; i <100;  i++){
        arrayNumbers.splice(i, 0, i);
    }
    window.document.getElementById("interval").innerText = arrayNumbers.slice(firstNumberInterval, secondNumberInterval);
}