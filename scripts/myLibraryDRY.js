
//This function take a date that the user write(convert it in days "totalBorn"), and the same with today date.
function takeDates(){
	var giveDate = window.document.getElementById("textBox").value;

	// Take the user born date and convert this date in days	
	var bornDate = new Date (giveDate);
	var bornYear = bornDate.getYear();
	var bornMounth = bornDate.getMonth() + 1;
	var bornDay = bornDate.getDate();
	totalBorn = (bornYear + 1900)*365 + bornMounth*30 + bornDay;

	// Conditional for know if you born before 1900	
	if (bornYear < 0){
		totalBorn = "";
		alert (" Sorry. You are died");
	}

	// Convert in days today date	
	var todayDate = new Date();
	var year = todayDate.getFullYear();
	var mounth = todayDate.getMonth() + 1;
	var day = todayDate.getDate();
	totalToday = year*365 + mounth*30 + day;

	// Conditional check if you put well the date 	
	if (isNaN(bornMounth) == true){
		alert ("Please use a correct date");
		totalBorn = "";
		totalToday="";
	}
}
