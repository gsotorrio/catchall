"use strict";

function changePositionbutton() {
    var button = document.getElementById('myButton');
    var postX = Math.floor(Math.random() *10000);
    var postY = Math.floor(Math.random() *10000);
    var widthScreen = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var heightScreen = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
   
    if(postX > widthScreen || postY > heightScreen){
        changePositionbutton();
    }
    else{
        button.style.position = "absolute";
        button.style.left = postY +'px';
        button.style.top = postX +'px';
    }
}

