"use strict";

function foundCharacters(){
 var array = [];

    var allTagsInBody = document.body.getElementsByTagName("*");

    for(var i = 0; i < allTagsInBody.length; i++) {
       var current = allTagsInBody[i];
        if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
           // Check the element has no children && that it is not empty
           array.push(current.textContent);
        }
    } 
    console.log(array);
}