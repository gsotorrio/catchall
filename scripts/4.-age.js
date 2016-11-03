"use strict";
var totalBorn ="";
var totalToday = "";

function takeDates(){
	var giveDate = window.document.getElementById("textBox").value;
	
	var bornDate = new Date (giveDate);
	var bornYear = bornDate.getYear();
	var bornMounth = bornDate.getMonth()+1;
	var bornDay = bornDate.getDate();
	totalBorn = (bornYear+1900)*365 + bornMounth*30 + bornDay;
	
	if (bornYear < 0){
		totalBorn = "";
		alert ("You are died");
	}
	
	var todayDate = new Date();
	var year = todayDate.getFullYear();
	var mounth = todayDate.getMonth()+1;
	var day = todayDate.getDate();
	totalToday = year*365 + mounth*30 + day;
	
	if (isNaN(bornMounth) == true){
		alert ("Please use a correct date");
		totalBorn = "";
		totalToday="";
	}
}	

function operate(){
	var total = totalToday - totalBorn;
	var a = total/365;
	var b = "";
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
	
	if (totalToday == ""){
	}
	else {
		return "You are living" + " " + year + "years" + " " + mounth + "mounts" + " " + days + "days";
		}	
}

function giveTimeYourLive (){
	window.document,getElementById("age").value = operte();
}

