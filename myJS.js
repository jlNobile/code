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

/*function expenseChart() {

	var outer = {width: 500, height: 700};
	var margin = {left: 30, right: 30, top: 30, bottom: 30};
	var inner = {width: outer.width - margin.left - margin.right, height: outer.height - margin.top - margin.bottom};
	var radius = {min: 2, max: 6};
	var column = {x: "amount", y: "catagory", radius: "", color: "catagory"};

	var svg = d3.select("body").append("svg")
		.attr("width", outer.width)
		.attr("height", outer.height);

	var g = svg.append("g")
		.attr("transform", "translate(30, 30)");

	var xScale = d3.scaleLinear().range([0, inner.width]);
	var yScale = d3.scaleLinear().range([inner.height, 0]);
	//var rScale = d3.scaleLinear().range([radius.min, radius.max]);
	var colorScale = d3.scaleOrdinal(d3.schemeCategory20);
	
	function render(data) {

		xScale.domain([0, d3.max(data, function(d){return +d[column.x]})]);
		//yScale.domain([0, d3.extent(data, function(d){return +d[column.y]}));
		//rScale.domain(d3.extent(data, function(d){return +d[column.radius]}));

		var rects = g.selectAll("rect").data(data);
		rects.enter().append("rect")
		.merge(rects)
			.attr("x", function(d){return xScale(d[column.x])})
			//.attr("y", function(d){return yScale(d[column.y])})
			//.attr("r", function(d){return rScale(d[column.radius])})
			.style("stroke", function(d){return colorScale(d[column.color])});

		circs.exit().remove();
	}

	d3.csv("expensesSept.csv", render);
}*/