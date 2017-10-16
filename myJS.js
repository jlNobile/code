function budgetTotal() {

	var spent = 0;
	var budgetValues = document.getElementsByName("budVal");
	var income = parseInt(document.getElementById("income").value);
	var balance = 0;
	var color = "green";

	for(var i = 0; i < budgetValues.length; i++) {
		if(parseInt(budgetValues[i].value)) {
			spent += parseInt(budgetValues[i].value);
		}
	}
	document.getElementById("total").value = spent;

	balance = income - spent; 
	document.getElementById("endingBalance").value = balance;

	if(balance < 0) {
		color = "red";
	}

	document.getElementById("endingBalance").style.color = color;
}

/*Initializes the form to all zero values*/
function initialize() {
	
	var budgetValues = document.getElementsByName("budVal");
	document.getElementById("income").value = 0;

	for(var i = 0; i < budgetValues.length; i++) {
		budgetValues[i].value = 0;
	}
}