/**
 * 
 */

function starPattern(rows) {
	var rowContent;
	var result = "";
	for (var i = 0; i < rows; i++) {
		rowContent = "";
		for (var j = 0; j < rows; j++) {
			rowContent = rowContent + "*";
		}
		result = result + (rowContent + "\n");
	}
	return result;
}

console.log(starPattern(4));
