"use strict";
var totalBorn ="";
var totalToday = "";

// Function for get totalBorn and totalToday
function getDates(){
	var giveDate = window.document.getElementById("box").value;

	// Take the user born date and convert this date in days	
	var bornDate = new Date (giveDate);
	var bornYear = bornDate.getYear();
	var bornMounth = bornDate.getMonth()+1;
	var bornDay = bornDate.getDate();
	totalBorn = (bornYear+1900)*365 + bornMounth*30 + bornDay;

	// Conditional for know if you born before 1900	
	if (bornYear < 0){
		totalBorn = "";
		alert (" Sorry. You are died");
	}

	// Convert in days today date	
	var todayDate = new Date();
	var year = todayDate.getFullYear();
	var mounth = todayDate.getMonth()+1;
	var day = todayDate.getDate();
	totalToday = year*365 + mounth*30 + day;

	// Conditional check if you put well the date 	
	if (isNaN(bornMounth) == true){
		alert ("Please use a correct date");
		totalBorn = "";
		totalToday="";
	}
}
	
// This function get the solution.
function calculate(){

	var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();  
	
	// var assistant for calculate	
	var total = totalToday - totalBorn;
	var a = total/365;
	var b = 0;

	// var for return the solution	
	var year = Math.floor(a)
	var mounth = 0;
	var days = 0;
	
	if (a % 1 == 0) {
		year = a;
    }
    else{
        b = total - Math.floor(a)*365;
    }
	
	if (b <30){
		days = b;
	}
	else{
		mounth = Math.floor(b/30); 
	}
	
	days = b - mounth*30;

	var totalMounth = year*12+mounth;
	var totalDays = year*365+mounth*30+days;
	var totalHours = totalDays*24+hour;
	var totalMinutes = totalHours*60+minute
	
	if (totalToday == ""){
	}
	else {
		return "You lived" + " " + year + "years," + " " + totalMounth + "mounths," + " " + totalDays + "days," + " " + totalHours + "hours" + " " + "and" + " " + totalMinutes + "minutes";
		}	
}

// Function for show the solution.
function showLived(){
	window.document.getElementById("timer").innerText = calculate();
}