function addNumbersInArray(){
    var getNumberUser = window.document.getElementById("numberUser").value;
    var array = [];
    var addResult = 0;

    for (var i = 0; i <= getNumberUser; i++){
        array.splice(i, 0, i);
        addResult = addResult + array[i];
    }
    window.document.getElementById("showArray").innerText = "The array is:" + " " + "[" + array + "]";    
    window.document.getElementById("showAddRessult").innerText = "The result to add the array is:" + " " + addResult;
}