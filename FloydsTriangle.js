/**
 * 
 */

function floydsTriangle(rows) {
	var number = 1;
	var rowContent;
	var result = "";

	for (var i = 0; i < rows; i++) {
		rowContent = "";
		for (var j = 0; j <= i; j++) {
			rowContent = rowContent + (number + " ");
			number++;
		}
		result = result + (rowContent + "\n");
	}
	return result;
}

console.log(floydsTriangle(5));
