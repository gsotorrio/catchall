"use strict";

(function showObjectProperties(){
	var student = { 
		name : "David Rayy", 
		sclass : "VI", 
		rollno : 12 
		};

	window.document.getElementById("objectZone").innerText = student.name + "," + " " + student.sclass + "," + " " + student.rollno;
})();

(function deleteRollnoPropertie(){
	var student = { 
		name : "David Rayy", 
		sclass : "VI", 
		rollno : 12 
		};
		
	delete student.rollno;

	window.document.getElementById("objectDelete").innerText = student.name + "," + " " + student.sclass + "," + " " + student.rollno;
})();