"use strict";

function getNameWeekDay(now){
	var WeekDay = ["Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday",
						"Sunday"];
	return WeekDay[now.getDay()];					
}

 function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
	var weekDay = now.getDay();	

	
    if (month.toString().length == 1) {
			month = '0'+month;
    }
	
    if (day.toString().length == 1) {
			day = '0'+day;
    }
	
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
	
    var dateTime = year+'/'+month+'/'+day+' '+"Today is "+getNameWeekDay(now)+' '+"Current time is: "+hour+':'+minute+':'+second ;   
     return dateTime;
}

function showDate(){
	document.getElementById("Date").textContent = now;
}
