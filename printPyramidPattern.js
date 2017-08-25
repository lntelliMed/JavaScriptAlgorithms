/**
 * 
 */

function printPyramidPattern(row) {
	var rowContent;
	var overallContent = "";
	for (var i = 0; i < row; i++) {
		rowContent = "";
		for (var j = 1; j <= row - i; j++) {
			rowContent += j;
		}
		overallContent += rowContent + "\n";

	}

	console.log(overallContent);

}
printPyramidPattern(4);
