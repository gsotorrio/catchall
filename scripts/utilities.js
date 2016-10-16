"use strict";

function getNameWeekDay(now){
	var WeekDay = ["Sunday" , "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday"];
	
	return WeekDay[now.getDay()];					
}

 function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
	var weekDay = now.getDay();	

	
	if (weekDay.toString().length == 1) {
			weekDay = '0'+weekDay;
	}
	
    if (hour.toString().length == 1) {
			hour = '0'+hour;
    }
	
    if (minute.toString().length == 1) {
			minute = '0'+minute;
    }
	
    if (second.toString().length == 1) {
			second = '0'+second;
    }
	
    return "Today is " + getNameWeekDay(now) + ' ' + "Current time is: " + hour + ':' + minute + ':' + second;
}

function showDate(){
	document.getElementById("Date").innerText = getDateTime();
}
