"use strict";

function foundCharacters(){
 var array = [];

    var elements = document.body.getElementsByTagName("*");

    for(var i = 0; i < elements.length; i++) {
       var current = elements[i];
        if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
           // Check the element has no children && that it is not empty
           array.push(current.textContent);
        }
    } 
    console.log(array);
}