"use strict";

function orderArrayWithBubbleSort(){
    var arrayNumbers = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

    for (var j = 0; j < arrayNumbers.length; j++){

        for (var i = 0; i < arrayNumbers.length; i++){
            
            if (arrayNumbers[i] > arrayNumbers[i+1]){
                
                var lessNumber = arrayNumbers[i+1];
                arrayNumbers[i+1] = arrayNumbers[i];
                arrayNumbers[i] = lessNumber;
             }
        } 
    }
    var arrayNumbersReverse = arrayNumbers.reverse(arrayNumbers);
    var arrayNumbersWithSpaces = arrayNumbers.join(", ");
    
    window.document.getElementById("arrayBubbleSort").innerText = "The new array using Bubble Sort is: " + "[" + arrayNumbersWithSpaces + "]";
}