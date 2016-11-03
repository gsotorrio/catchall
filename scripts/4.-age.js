"use strict";

function gh(){
	var giveDate = window.document.getElementById("textBox").value;
	var bornDate = new Date (giveDate);
	
	var bornYear = bornDate.getYear();
	var bornMounth = bornDate.getMonth()+1;
	var bornDay = bornDate.getDate();
}	
 
function takeDates (){
	var todayDate = new Date();
	var year = todayDate.getFullYear();
	var mounth = todayDate.getMonth()+1;
	var day = todayDate.getDate();
}