"use strict";

function changePositionbutton() {
    var button = window.document.getElementById('myButton');

    var widthScreen = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var heightScreen = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
   
    var postX = Math.floor(Math.random() * widthScreen);
    var postY = Math.floor(Math.random() * heightScreen);
    
    button.style.position = "absolute";
    button.style.left = postY +'px';
    button.style.top = postX +'px';
}