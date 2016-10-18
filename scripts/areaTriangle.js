"use strict";

var side1 = window.document.getElementById("A").value;   
var side2 = window.document.getElementById("B").value;   
var side3 = window.document.getElementById("C").value;
   
var perimeter = (side1 + side2 + side3)/2;  
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));  