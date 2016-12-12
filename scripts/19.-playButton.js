"use strict";

function changePositionbutton() {
    var button = document.getElementById('myButton');
    var postX = Math.floor(Math.random() *1000);
    var postY = Math.floor(Math.random() *10000);
   
    if(postY > 1750){
        changePositionbutton();
    }
    else{
        button.style.position = "absolute";
        button.style.left = postY +'px';
        button.style.top = postX +'px';
    }
}

