/**
 * 
 */

function findFactors(maxNum) {

	for (var i = 1; i <= maxNum; i++) {
		console.log("The factors of the number " + i + " are:")
		for (var j = 1; j <= i; j++) {
			if (i % j === 0) {
				console.log(j);
			}
		}

	}

}

findFactors(100);