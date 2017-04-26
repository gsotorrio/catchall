"use strict";

(function showObjectProperties(){
	var student = { 
		name : "David Rayy", 
		sclass : "VI", 
		rollno : 12 
		};

	window.document.getElementById("propertiesZone").innerText = student.name + "," + student.sclass + "," + student.rollno;
})();