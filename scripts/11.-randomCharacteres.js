function showAllCharacteresUserWant(){
    var characteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var arrayCharacteres = characteres.split("");
    var showTheResult = [];

    var count = parseInt(window.document.getElementById("numberCharacteres").value);
 
    if (isNaN(count) == true){
        window.document.getElementById("divError").style.display = "inline-block";
    }
    else{
        for (var i = 0; i < count; i++){
            var formulaForGetRamdomElements = Math.floor(Math.random() * arrayCharacteres.length);
            var newArrayWithRamdomElements = arrayCharacteres.splice(formulaForGetRamdomElements, 1);
        
            showTheResult.push(newArrayWithRamdomElements[0]);
        }
        window.document.getElementById("divError").style.display = "none";
        window.document.getElementById("showCharacteres").innerText = "These are your characteres:" + " " + "[" + showTheResult + "]";  
    }
}
