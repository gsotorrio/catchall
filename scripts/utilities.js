"use strict";

 function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
	var weekDay = now.getDay();	
	var weekDay = new Array(7);
		weekDay[0]=  "Sunday";
		weekDay[1] = "Monday";
		weekDay[2] = "Tuesday";
		weekDay[3] = "Wednesday";
		weekDay[4] = "Thursday";
		weekDay[5] = "Friday";
		weekDay[6] = "Saturday";

	
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
	
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
	
	if (weekDay.toString().length ==1) {
		var weekDay = '0'+weekDay;
	}
	
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
		
    }
	
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
	
    if(second.toString().length == 1) {
        var second = '0'+second;
    }
	
    var dateTime = year+'/'+month+'/'+day+' '+weekDay+' '+hour+':'+minute+':'+second;   
     return dateTime;
}
