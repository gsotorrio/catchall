function showAllCharacteresUserWant(count){
    var characteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var arrayCharacteres = characteres.split("");
    var slectElements = arrayCharacteres.slice(arrayCharacteres);
    var showTheResult = [];

    count = parseInt(window.document.getElementById("numberCharacteres").value);
 
    if (isNaN(count) == true){
        //var a = "melon solo numeros";
        //alert(a);
        window.document.getElementById("divError").style.display = "inline-block";
    }

    else{
        for (var i = 0; i < count; i++){
            window.document.getElementById("divError").style.display = "none";
            
            var formulaForGetRamdomElements = Math.floor(Math.random() * slectElements.length);
            var newArrayWithRamdomElements = slectElements.splice(formulaForGetRamdomElements, 1);
        
            showTheResult.push(newArrayWithRamdomElements[0]);
        }
        window.document.getElementById("showCharacteres").innerText = "These are your characteres:" + " " + "[" + showTheResult + "]";  
    }
}
